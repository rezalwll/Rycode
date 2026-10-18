/** Build-time reference translation into editable JSX. Never used by the app. */
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {load} from 'cheerio';
import postcss from 'postcss';
import {createHash} from 'node:crypto';
const root=resolve(import.meta.dirname,'..'),ref=resolve(root,'.reference');
const routes=JSON.parse(await readFile(resolve(ref,'routes.json'),'utf8'));
const assets=JSON.parse(await readFile(resolve(ref,'assets.json'),'utf8'));
const canonical=s=>{const u=new URL(s,'https://covix.framer.website');return u.origin+u.pathname+(u.searchParams.has('scale-down-to')||u.hostname==='fonts.googleapis.com'?u.search:'');};
const assetMap=new Map(assets.map(a=>[canonical(a.url),a.local]));
const local=s=>assetMap.get(canonical(s))||s;
const localCSS=s=>s.replace(/url\(\s*(['"]?)([^)'"\s]+)\1\s*\)/g,(_,q,url)=>`url("${/^(data:|#)/.test(url)?url:local(url)}")`);
const states=JSON.parse(await readFile(resolve(ref,'services-open.json'),'utf8'));
const faqStates=JSON.parse(await readFile(resolve(ref,'faq-open.json'),'utf8'));
const faqContent=JSON.parse(await readFile(resolve(ref,'faq-content.json'),'utf8'));
const effects=JSON.parse(await readFile(resolve(ref,'image-effects.json'),'utf8'));
const menuDoc=load(await readFile(resolve(ref,'mobile-menu-open.html'),'utf8'));
const menuPanel=menuDoc('.framer-jc5u9r').first();
menuPanel.find('a[href]').each((_,e)=>{const n=menuDoc(e),u=new URL(n.attr('href'),'https://covix.framer.website/');n.attr('href',u.pathname+u.hash);});
menuPanel.find('[style]').addBack('[style]').each((_,e)=>{const n=menuDoc(e);n.attr('style',(n.attr('style')||'').replace(/(?:^|;)\s*transform:[^;]+/g,';transform:none'));});
const docs=new Map(),styles=new Set();
const key=route=>route==='/'?'home':route.slice(1).replaceAll('/','__');
for(const route of routes){
 const $=load(await readFile(resolve(ref,key(route)+'.localized.html'),'utf8'));
 const rendered=load(await readFile(resolve(ref,'rendered-'+key(route)+'.html'),'utf8'));
 $('style').each((_,e)=>styles.add($(e).text()));rendered('style').each((_,e)=>{const css=rendered(e).text();if(!css.includes('[Truncated]'))styles.add(localCSS(css));});
 // Runtime text and image components often have no server-rendered contents.
 $('[class$="-container"]').each((_,e)=>{const n=$(e);if(n.text().trim()||n.find('img,video,svg').length)return;const cls=(n.attr('class')||'').split(/\s+/)[0],other=rendered('.'+cls).first();if(other.find('p,h1,h2,h3,img,svg').length)n.html(other.html());});
 $('.framer-IOjX6').each((i,e)=>{
  const n=$(e),title=n.find('h4').text(),state=states.find(s=>s.title===title);if(!state)return;
  const c=load(state.markup);if(!n.find('.framer-1ebu21f').length)n.find('.framer-rjp6f9').append(c('.framer-1ebu21f').toString());
  n.attr('data-service-index',String(i%5));
 });
 $('.framer-QEDYB').each((_,e)=>{const n=$(e),title=n.find('.framer-k86jas').text(),content=faqContent.find(s=>s.question===title);if(!content)return;const c=load(faqStates[0].markup),answer=c('.framer-qq7w8r');answer.find('p').text(content.answer);if(!n.find('.framer-qq7w8r').length)n.append(answer.toString());});
 $('.framer-ATxvc.framer-v-1t09hgd .framer-jc5u9r').each((_,e)=>$(e).html(menuPanel.html()));
 $('*').each((_,e)=>{
  const n=$(e);if(n.attr('style'))n.attr('style',localCSS(n.attr('style')));
  for(const attr of ['src','poster'])if(n.attr(attr))n.attr(attr,local(n.attr(attr)));
  if(n.attr('srcset'))n.attr('srcset',n.attr('srcset').split(',').map(s=>{const [url,...rest]=s.trim().split(/\s+/);return [local(url),...rest].join(' ');}).join(', '));
  if(e.name==='a'&&n.attr('href')){try{const u=new URL(n.attr('href'),'https://covix.framer.website'+route);if(u.origin==='https://covix.framer.website')n.attr('href',u.pathname+u.search+u.hash);}catch{}}
 });
 docs.set(route,$);
}
const libraries=[
 ['react',['CSSProperties'],true],['react',['Fragment'],false],['next/link',['Link'],false],
 ['@/components/Motion',['Reveal','SplitText','MediaVideo','Carousel','Counter','Ticker'],false],
 ['@/components/Accordion',['AccordionGroup','AccordionItem','AccordionPanel','AccordionToggle'],false],
 ['@/components/ContactForm',['ContactForm','FormField'],false],
 ['@/components/Navigation',['MobileNavigation','MenuToggle','MenuPanel'],false],
 ['@/components/DistortedImage',['DistortedImage'],false],
 ['@/styles/reference-styles',['referenceStyles'],false],
];
async function write(path,body){
 const imports=libraries.map(([from,names,type])=>{
  const used=names.filter(name=>name==='CSSProperties'?body.includes('as CSSProperties'):name==='referenceStyles'?body.includes('referenceStyles.'):new RegExp('<'+name+'(?:[\\s/>])').test(body));if(!used.length)return '';
  return `import ${type?'type ':''}${from==='next/link'?'Link':'{ '+used.join(', ')+' }'} from '${from}';`;
 }).filter(Boolean).join('\n');
 const file=resolve(root,path);await mkdir(dirname(file),{recursive:true});await writeFile(file,(path.endsWith('.tsx')?imports+'\n':'')+body+'\n');
}
const camel=s=>s.startsWith('--')?s:s.replace(/^-webkit-/,'Webkit-').replace(/[-:]([a-z])/g,(_,c)=>c.toUpperCase());
const names={class:'className',for:'htmlFor',tabindex:'tabIndex',srcset:'srcSet',crossorigin:'crossOrigin',viewbox:'viewBox',playsinline:'playsInline',autoplay:'autoPlay',fetchpriority:'fetchPriority',readonly:'readOnly',maxlength:'maxLength',minlength:'minLength',autocomplete:'autoComplete'};
const bools=new Set(['required','disabled','hidden','muted','loop','controls','playsinline','autoplay','multiple','checked','selected','readonly']);
const voids=new Set(['img','input','br','hr','source','link','meta','wbr']);
const utilities={'width:100%':'w-full!','height:100%':'h-full!','display:contents':'contents!','flex-shrink:0':'shrink-0!','position:relative':'relative!','overflow:hidden':'overflow-hidden!'};
let $,currentRoute;
const referenceStyleMap=new Map();
function attrs(e,omit=[],settings={}){
 const a={...e.attribs},style={};const classes=[];
 if(a.style)postcss.parse('x{'+a.style+'}').first.nodes.forEach(d=>{if(d.type!=='decl')return;const util=utilities[d.prop+':'+d.value];if(util){classes.push(util);return;}let value=d.value;if(settings.normalize&&['opacity','transform','filter'].includes(d.prop))value=d.prop==='opacity'?'1':d.prop==='filter'?'blur(0px)':'none';style[camel(d.prop)]=value;});
 if(classes.length)a.class=((a.class||'')+' '+classes.join(' ')).trim();
 const serialized=JSON.stringify(style);const styleKey='s'+createHash('sha256').update(serialized).digest('hex').slice(0,10);if(Object.keys(style).length)referenceStyleMap.set(styleKey,style);
 return Object.entries(a).filter(([k])=>!omit.includes(k)&&k!=='style'&&!/^on/i.test(k)&&!k.startsWith('tickereffect')&&!['_constraints','parentsize','rotation','shadows','data-framer-page-link-current','w1hn1yx_o'].includes(k)&&!(k==='name'&&!['input','select','textarea','form','button','meta'].includes(e.name))).map(([k,v])=>{
  if(bools.has(k))return `${names[k]||k}={true}`;
  if(['tabindex','maxlength','minlength','rows','cols','aria-posinset','aria-setsize','aria-level','aria-colcount','aria-rowcount'].includes(k))return `${names[k]||k}={${Number(v)}}`;
  if(k==='value'&&['input','textarea'].includes(e.name))k='defaultValue';
  return `${names[k]||(k.startsWith('aria-')||k.startsWith('data-')?k:camel(k))}=${JSON.stringify(v)}`;
 }).concat(Object.keys(style).length&&!omit.includes('style')?[`style={referenceStyles.${styleKey}}`]:[]).join(' ');
}
const kids=(e,o={})=>(e.children||[]).map(n=>render(n,o)).join('');
function render(e,options={}){
 if(e.type==='text')return `{${JSON.stringify(e.data)}}`;
 if(e.type!=='tag'||['script','style','iframe','canvas'].includes(e.name))return '';
 const n=$(e);let tag=e.name,extra='',omit=[],childOptions=options;
 const effect=effects.find(item=>(!item.route||item.route===currentRoute)&&n.hasClass(item.className));
 if(effect)return `<div ${attrs(e)}><DistortedImage src=${JSON.stringify(effect.src)} fade={${effect.fade}} replay={${effect.replay}}/></div>`;
 if(n.is('.framer-slideshow')){
  const items=n.find('ul').first().children('li').toArray().slice(0,4).map((li,index)=>`<Fragment key="slide-${index}">${kids(li)}</Fragment>`);
  return `<Carousel ${attrs(e)} kind="${n.closest('.framer-5q3muz-container').length?'hero':'stats'}" items={[${items.join(',')}]}/>`;
 }
 if(n.is('[id="Service Section"]'))tag='AccordionGroup';
 if(n.is('.framer-IOjX6')){
  tag='AccordionItem';const index=Number(n.attr('data-service-index'));
  const mobile=n.attr('data-framer-name')?.includes('Phone'),tablet=n.attr('data-framer-name')?.includes('Tablet');
  extra=` index={${index}} mode="service" openClass="${mobile?'framer-v-jmhdwl':tablet?'framer-v-8uqube':'framer-v-16ad7hm'}" closedClass="${mobile?'framer-v-1x6eqby':tablet?'framer-v-1tqt2ca':'framer-v-ksyjlc'}"`;
 }
 if(n.is('.framer-QEDYB')){tag='AccordionItem';extra=` mode="faq" index={0} initialOpen={${n.hasClass('framer-v-bgq6iw')}} openClass="framer-v-bgq6iw" closedClass="framer-v-5va5ez"`;}
 if(n.is('.framer-1ebu21f,.framer-qq7w8r'))tag='AccordionPanel';
 if(n.is('button.framer-hf6rbv,button.framer-1mcnny4')){tag='AccordionToggle';extra=` label=${JSON.stringify(n.closest('.framer-IOjX6').find('h4').text()||n.closest('.framer-QEDYB').find('.framer-k86jas').text())}`;}
 if(n.is('form')){tag='ContactForm';omit.push('action','method');}
 if(n.is('input,textarea,select')){if(n.attr('aria-hidden')==='true'||n.attr('type')==='hidden')return '';tag='FormField';extra=` as="${e.name}"`;omit.push('value');}
 if(n.is('video')){tag='MediaVideo';omit.push('autoplay');}
 if(n.is('h2')&&/^0[%+]$/.test(n.text().replace(/\s/g,''))&&n.closest('.framer-slideshow').length){
  const index=n.closest('li').index()%4;return `<Counter ${attrs(e)} value={${[98,150,12,6][index]}} suffix="${index===0?'%':'+'}"/>`;
 }
 if(n.is('ul')&&n.closest('.framer-5fvLi,.framer-dsg2t6').length){tag='Ticker';extra=n.closest('.framer-dsg2t6').length?' speed={80}':'';}
 if(n.is('.framer-ATxvc.framer-v-1t09hgd'))tag='MobileNavigation';
 if(n.is('.framer-JjGLa')){tag='MenuToggle';omit.push('tabindex');}
 if(n.is('.framer-jc5u9r')&&n.closest('.framer-ATxvc.framer-v-1t09hgd').length)tag='MenuPanel';
 const split=n.is('h1')||n.children('span').find('span[style*="opacity"]').length>4;
 if(split&&!options.split){tag='SplitText';extra=` as="${e.name}" scrollLinked={${e.name!=='h1'}}`;childOptions={...options,split:true};}
 if((n.is('[data-framer-appear-id]')||/(?:^|;)opacity:0(?:;|$)/.test(n.attr('style')||''))&&!options.split&&tag===e.name){tag='Reveal';extra=` as="${e.name}" from=${JSON.stringify((n.attr('style')||'').match(/(?:^|;)transform:([^;]+)/)?.[1]||'none')}`;}
 if(n.is('a[href]')&&n.attr('href').startsWith('/'))tag='Link';
 return `<${tag} ${attrs(e,omit,{normalize:options.split})}${extra}${voids.has(tag)?' />':`>${kids(e,childOptions)}</${tag}>`}`;
}
for(const cssFile of ['rendered-component-styles.css','mobile-styles.css'])try{const css=await readFile(resolve(ref,cssFile),'utf8');if(!css.includes('[Truncated]'))styles.add(localCSS(css));}catch{}
await write('src/app/globals.css',`@layer theme, base, components, utilities;\n@import "tailwindcss/theme.css" layer(theme);\n@import "tailwindcss/utilities.css" layer(utilities);\n@source "../";\n@import "./interaction.css";\n${[...styles].join('\n')}\n[hidden]{display:none!important}\n:focus-visible{outline:2px solid #ff1a05;outline-offset:4px}\n@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;transition-duration:.01ms!important}html{scroll-behavior:auto}}\n`);
$=docs.get('/');const frame=$('#main').children('div').first();const elements=frame.children().not('style,script').toArray();
await write('src/components/SiteHeader.tsx',`export function SiteHeader(){return (${render(elements[0])});}`);
await write('src/components/SiteFooter.tsx',`export function SiteFooter(){return <>${elements.slice(2).filter(e=>e.attribs.id!=='overlay').map(e=>render(e)).join('')}</>;}`);
const svg=$('#svg-templates').toArray().map(e=>render(e)).join('');
await write('src/components/VectorSymbols.tsx',`export function VectorSymbols(){return <>${svg}</>;}`);
await write('src/app/layout.tsx',`import type {Metadata} from 'next';\nimport './globals.css';\nimport {SiteHeader} from '@/components/SiteHeader';\nimport {SiteFooter} from '@/components/SiteFooter';\nimport {VectorSymbols} from '@/components/VectorSymbols';\nimport {ScrollEffects} from '@/components/ScrollEffects';\nexport const metadata:Metadata={title:{default:'Covix — Modern Creative Studio',template:'%s | Covix'},description:'Creative websites and brand experiences built with purpose.'};\nexport default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><ScrollEffects/><div id="main"><div ${attrs(frame[0])}><SiteHeader/>{children}<SiteFooter/></div></div><VectorSymbols/></body></html>;}`);
for(const [route,doc] of docs){
 $=doc;currentRoute=route;
 const content=$('#main').children('div').first().children().not('style,script').eq(1)[0];
 const sectionImports=[],sectionCalls=[];
 const routeName=route==='/'?'Home':route==='/404'?'NotFound':route.slice(1).split(/[-/]/).map(s=>s[0].toUpperCase()+s.slice(1)).join('');
 const sections=$(content).children().not('style,script').toArray();
 for(let i=0;i<sections.length;i++){
  const section=sections[i];const sectionName=(section.attribs['data-framer-name']||`Block ${i}`).replace(/[^a-zA-Z0-9 ]/g,' ').split(/\s+/).filter(Boolean).map(s=>s[0].toUpperCase()+s.slice(1)).join('');
  const name=routeName+sectionName;
  await write('src/components/pages/'+name+'.tsx',`export function ${name}(){return (${render(section)});}`);
  sectionImports.push(`import {${name}} from '@/components/pages/${name}';`);sectionCalls.push(`<${name}/>`);
 }
 const title=route==='/'?'Covix — Modern Creative Studio':route==='/404'?'Page not found':route.split('/').at(-1).split('-').map(s=>s[0].toUpperCase()+s.slice(1)).join(' ');
 await write(route==='/404'?'src/app/not-found.tsx':`src/app${route==='/'?'':route}/page.tsx`,`import type {Metadata} from 'next';\n${sectionImports.join('\n')}\nexport const metadata:Metadata={title:${JSON.stringify(title)}};\nexport default function Page(){return <main ${attrs(content)}>${$(content).find('h1').length?'':'<h1 className="sr-only">'+title+'</h1>'}${sectionCalls.join('')}</main>;}`);
}
console.log('Prepared editable React source for',routes.length,'routes');
await write('src/styles/reference-styles.ts',`import type {CSSProperties} from 'react';\n// Shared measured styles retain CSS variables and exact reference dimensions.\nexport const referenceStyles={\n${[...referenceStyleMap].map(([key,value])=>`${key}:${JSON.stringify(value)} as CSSProperties`).join(',\n')}\n};`);
