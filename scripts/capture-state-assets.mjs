import {readFile,writeFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {extname} from 'node:path';
const assets=JSON.parse(await readFile('.reference/assets.json','utf8'));
const canonical=s=>{const u=new URL(s);return u.origin+u.pathname+(u.searchParams.has('scale-down-to')?u.search:'');};
async function files(dir){const output=[];for(const e of await readdir(dir,{withFileTypes:true})){const p=dir+'/'+e.name;output.push(...(e.isDirectory()?await files(p):[p]));}return output;}
const urls=new Set();
for(const file of await files('src')){const text=await readFile(file,'utf8');for(const match of text.matchAll(/https:\/\/framerusercontent\.com\/(?:images|assets)\/[^"'\s\\,)]+/g))urls.add(match[0].replaceAll('&amp;','&'));}
let added=0;
for(const url of urls){if(assets.some(a=>canonical(a.url)===canonical(url)))continue;const file=createHash('sha256').update(canonical(url)).digest('hex').slice(0,16)+extname(new URL(url).pathname);const response=await fetch(url);if(!response.ok)throw new Error(`${response.status}: ${url}`);await writeFile('public/assets/'+file,Buffer.from(await response.arrayBuffer()));assets.push({url,file,local:'/assets/'+file});added++;}
await writeFile('.reference/assets.json',JSON.stringify(assets,null,2));console.log('Added interactive-state media:',added,'Total local assets:',assets.length);
