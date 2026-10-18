import {readFile,writeFile} from 'node:fs/promises';
import {load} from 'cheerio';
const routes=JSON.parse(await readFile('.reference/routes.json','utf8')),output=[];
for(const route of routes){const key=route==='/'?'home':route.slice(1).replaceAll('/','__'),$=load(await readFile('.reference/'+key+'.html','utf8'));const classes=[];$('[class$="-container"]').each((_,e)=>{const n=$(e);if(!n.text().trim()&&!n.find('img,video,svg').length)classes.push((n.attr('class')||'').split(/\s+/)[0]);});output.push({route,classes:[...new Set(classes)]});}
await writeFile('.reference/runtime-slots.json',JSON.stringify(output,null,2));console.log(output.map(e=>({route:e.route,slots:e.classes.length})));
