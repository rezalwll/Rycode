import {readFile,writeFile} from 'node:fs/promises';
const base='https://framerusercontent.com/sites/5utDWuJ5ZXJqPTzsEEUxZD/';
const response=await fetch(base+'ScrollText.BLf9JDog.mjs');
if(!response.ok)throw new Error('Reference component unavailable');
const code=await response.text();await writeFile('.reference/scroll-text-component.mjs',code);
for(const needle of ['redesign','platforms','started','framer-QEDYB']){
 const index=code.indexOf(needle);console.log(needle,index,index>=0?code.slice(Math.max(0,index-130),index+420):'');
}
const distortion=await readFile('.reference/distortion.mjs','utf8');
const shaders=[...distortion.matchAll(/`([^`]*uniform[^`]*void main[^`]*)`/g)].map(m=>m[1]).filter(s=>s.includes('uProgress'));
await writeFile('.reference/distortion-shaders.json',JSON.stringify(shaders,null,2));
console.log('Effect shaders',shaders.map(s=>({length:s.length,start:s.slice(0,110),end:s.slice(-200)})));
