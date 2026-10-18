import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
import {createHash} from 'node:crypto';
import {load} from 'cheerio';
const root=resolve(import.meta.dirname,'..'),origin='https://covix.framer.website';
await mkdir(resolve(root,'.reference'),{recursive:true});await mkdir(resolve(root,'public/assets'),{recursive:true});
const pages=new Map(),queue=['/','/404'],seen=new Set(queue),assets=new Map();
while(queue.length){const route=queue.shift();const response=await fetch(origin+route);if(!response.ok&&response.status!==404)throw new Error(route+': '+response.status);const html=await response.text();await writeFile(resolve(root,'.reference',(route==='/'?'home':route.slice(1).replaceAll('/','__'))+'.html'),html);const $=load(html);pages.set(route,$);$('a[href]').each((_,e)=>{const href=$(e).attr('href');try{const u=new URL(href,origin+route);const next=u.pathname.replace(/\/$/,'')||'/';if(u.origin===origin&&!seen.has(next)&&!extname(next)){seen.add(next);queue.push(next);}}catch{}});if(pages.size>80)throw new Error('Unexpected crawl expansion');console.log('Read',route);}
function asset(url,base=origin){if(!url||/^(data:|blob:|#)/.test(url))return url;let u;try{u=new URL(url,base);}catch{return url;}if(!/^https?:$/.test(u.protocol))return url;const canonical=u.origin+u.pathname+(/fonts\.googleapis\.com/.test(u.hostname)||u.searchParams.has('scale-down-to')?u.search:'');if(!assets.has(canonical)){const file=createHash('sha256').update(canonical).digest('hex').slice(0,16)+(extname(u.pathname)||'.bin');assets.set(canonical,{url:u.href,file,local:'/assets/'+file});}return assets.get(canonical).local;}
const urls=(css,base=origin)=>css.replace(/url\(\s*(['"]?)([^)'"\s]+)\1\s*\)/g,(_,q,url)=>`url("${asset(url,base)}")`);
const structure=[];
for(const [route,$] of pages){
 $('style').each((_,e)=>$(e).text(urls($(e).text())));
 $('[style]').each((_,e)=>$(e).attr('style',urls($(e).attr('style'))));
 $('img').each((_,e)=>{const n=$(e);n.attr('src',asset(n.attr('src')));if(n.attr('srcset'))n.attr('srcset',n.attr('srcset').split(',').map(s=>{const [url,...rest]=s.trim().split(/\s+/);return [asset(url),...rest].join(' ');}).join(', '));});
 $('video,source,audio').each((_,e)=>{const n=$(e);for(const attr of ['src','poster'])if(n.attr(attr))n.attr(attr,asset(n.attr(attr)));});
 $('link[href]').each((_,e)=>{const n=$(e);if(/stylesheet|icon/.test(n.attr('rel')||''))n.attr('href',asset(n.attr('href')));});
 const blocks=[];$('[data-framer-name]').each((_,e)=>{const n=$(e);if(n.parents('[data-framer-name]').length<2)blocks.push({name:n.attr('data-framer-name'),tag:e.name,class:n.attr('class'),text:n.text().slice(0,180)});});
 structure.push({route,title:$('title').text(),headings:$('h1,h2,h3,h4,h5').map((_,e)=>({tag:e.name,text:$(e).text()})).get(),blocks});
 await writeFile(resolve(root,'.reference',(route==='/'?'home':route.slice(1).replaceAll('/','__'))+'.localized.html'),$.html());
}
let done=0;while(done<assets.size){const batch=[...assets.values()].slice(done,done+8);done+=batch.length;await Promise.all(batch.map(async a=>{let bytes;try{bytes=await readFile(resolve(root,'public/assets',a.file));}catch{const r=await fetch(a.url,{headers:{'User-Agent':'Mozilla/5.0'}});if(!r.ok)throw new Error(a.url+' '+r.status);bytes=Buffer.from(await r.arrayBuffer());if(a.file.endsWith('.css'))bytes=Buffer.from(urls(bytes.toString(),a.url));await writeFile(resolve(root,'public/assets',a.file),bytes);}}));}
await writeFile(resolve(root,'.reference/assets.json'),JSON.stringify([...assets.values()],null,2));await writeFile(resolve(root,'.reference/routes.json'),JSON.stringify([...pages.keys()],null,2));await writeFile(resolve(root,'.reference/structure.json'),JSON.stringify(structure,null,2));console.log('Captured',pages.size,'routes and',assets.size,'assets');
