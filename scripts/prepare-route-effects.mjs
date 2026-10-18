import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {extname} from 'node:path';
import {load} from 'cheerio';
const routes=JSON.parse(await readFile('.reference/routes.json','utf8'));
const effects=JSON.parse(await readFile('.reference/image-effects.json','utf8'));
const assets=JSON.parse(await readFile('.reference/assets.json','utf8'));
const cache=new Map();
for(const route of routes){
  if(route==='/')continue;
  const name=route.slice(1).replaceAll('/','__'),$=load(await readFile('.reference/'+name+'.html','utf8'));
  const raw=$('#__framer__handoverData').text();let fields={};
  if(raw){const table=JSON.parse(raw);const record=table.find(value=>value&&typeof value==='object'&&!Array.isArray(value)&&Object.keys(value).length>4&&Object.values(value).every(index=>Number.isInteger(index)&&table[index]?.type!==undefined));if(record)fields=Object.fromEntries(Object.entries(record).map(([key,index])=>{const item=table[table[index].value];return[key,item&&typeof item==='object'&&'src'in item?table[item.src]:item];}));}
  for(const element of $('link[rel=modulepreload]').toArray()){
    const url=$(element).attr('href'),file=url.split('/').at(-1);if(file.length<55)continue;
    let code=cache.get(url);if(!code){try{code=await readFile('.reference/'+file,'utf8');}catch{const response=await fetch(url);if(!response.ok)throw new Error(url);code=await response.text();await writeFile('.reference/'+file,code);}cache.set(url,code);}
    const alias=code.match(/import\{[^}]*t as (\w+)\}from"\.\/Distortion\./)?.[1];if(!alias)continue;
    const vars=new Map([...code.matchAll(/\b(\w+):(\w+)=\w+\(`([^`]+)`\)/g)].map(m=>[m[2],m[3]]));
    let at=-1;while((at=code.indexOf(alias+',{animateProp',at+1))>=0){
      const before=code.slice(Math.max(0,at-600),at),body=code.slice(at,at+2600);
      const className=[...before.matchAll(/className:`([^`]+)`/g)].at(-1)?.[1];if(!className||!$('.'+className).length)continue;
      const variable=body.match(/defaultImage:\w+\((\w+)\)/)?.[1];
      const image=fields[vars.get(variable)]||body.match(/upImage:[\s\S]*?src:`([^`]+)`/)?.[1];
      if(!image||!/^https:\/\//.test(image))throw new Error('Missing route image '+route+' '+className+' '+variable);
      if(effects.some(e=>e.route===route&&e.className===className))continue;
      const path=new URL(image).pathname;let asset=assets.find(a=>new URL(a.url).pathname===path&&!a.url.includes('scale-down-to'));
      if(!asset){const file=createHash('sha256').update(new URL(image).origin+path).digest('hex').slice(0,16)+extname(path);const response=await fetch(image);if(!response.ok)throw new Error(image);await writeFile('public/assets/'+file,Buffer.from(await response.arrayBuffer()));asset={url:image,file,local:'/assets/'+file};assets.push(asset);}
      effects.push({route,className,url:image,src:asset.local,fade:/fadeIn:!0/.test(body.slice(0,300)),replay:/replay:!0/.test(body.slice(0,300))});
    }
  }
}
await writeFile('.reference/image-effects.json',JSON.stringify(effects,null,2));await writeFile('.reference/assets.json',JSON.stringify(assets,null,2));console.log('Route image effects:',effects.length,'Assets:',assets.length);
