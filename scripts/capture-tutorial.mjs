// Run against a local production preview. Requires Puppeteer installed locally.
// Screenshots use a temporary browser profile and never increment the player counter.
import puppeteer from 'puppeteer';
import { mkdir, writeFile } from 'node:fs/promises';
const browser = await puppeteer.launch({headless:true,args:['--no-sandbox']});
const frames = {};
try {
 const page=await browser.newPage();await page.setViewport({width:960,height:640,deviceScaleFactor:1});
 await page.evaluateOnNewDocument(()=>{localStorage.setItem('challenger_player_counted_v1','1');localStorage.setItem('challenger_tutorial_seen','1');});
 await page.goto(process.argv[2]||'http://127.0.0.1:4175/ellipse/',{waitUntil:'networkidle0'});
 await page.waitForSelector('.menu-btn');
 await page.addStyleTag({content:'.toast-stack,.player-counter{visibility:hidden!important}'});
 await page.evaluate(()=>{const version=document.querySelector('.menu-logo')?.parentElement?.lastElementChild;if(version&&/^v\d/.test(version.textContent||''))version.style.visibility='hidden';});
 await mkdir('public/tutorial',{recursive:true});
 const capture=async(name,selector)=>{
  await new Promise(r=>setTimeout(r,700));
  let box=await page.$eval(selector,e=>{const r=e.getBoundingClientRect();return{x:r.x,y:r.y,width:r.width,height:r.height};});
  const clip={x:Math.max(0,Math.min(480,Math.round(box.x+box.width/2-240))),y:Math.max(0,Math.min(280,Math.round(box.y+box.height/2-180))),width:480,height:360};
  await page.screenshot({path:`public/tutorial/${name}.webp`,type:'webp',quality:82});
  const rect=(c)=>[(box.x-c.x)/c.width*100,(box.y-c.y)/c.height*100,box.width/c.width*100,box.height/c.height*100].map(n=>Math.round(n*100)/100);
  frames[name]={wide:rect({x:0,y:0,width:960,height:640}),close:rect(clip)};
  if(name==='assembly'){
   await page.setViewport({width:640,height:480,deviceScaleFactor:1});
   await new Promise(r=>setTimeout(r,700));
   box=await page.$eval(selector,e=>{const r=e.getBoundingClientRect();return{x:r.x,y:r.y,width:r.width,height:r.height};});
   await page.screenshot({path:`public/tutorial/${name}-close.webp`,type:'webp',quality:85});
   frames[name].close=rect({x:0,y:0,width:640,height:480});
   await page.setViewport({width:960,height:640,deviceScaleFactor:1});
  }else await page.screenshot({path:`public/tutorial/${name}-close.webp`,type:'webp',quality:85,clip});
 };
 await page.evaluate(()=>[...document.querySelectorAll('.menu-btn')].find(b=>b.textContent==='Flight').id='tour-flight');
 await capture('menu','#tour-flight');
 await page.evaluate(()=>[...document.querySelectorAll('button')].find(b=>b.textContent==='Vehicle assembly').click());await page.waitForSelector('#vp-placement');
 await page.evaluate(()=>[...document.querySelectorAll('#vl button')].find(b=>b.textContent.includes('Build a rocket')).click());
 await capture('assembly','#vg');await page.click('#vg');await page.waitForSelector('.flight-readouts');
 await capture('launch','.flight-actions [data-action="stage"]');
 await page.click('[data-action="map"]');await page.select('#transfer-target','moon');await capture('moon','#transfer-go');
 await page.click('[data-map="close"]');
 await page.click('.flight-actions [data-action="stage"]');await page.waitForFunction(()=>!window.__challenger.flight.grounded,{timeout:20000});
 await new Promise(r=>setTimeout(r,5500));
 await page.evaluate(()=>{
  const f=window.__challenger.flight,e=f.system.bodyByName('earth');
  const d=f.state.position.map((v,i)=>v-e.position[i]);const len=Math.hypot(...d);const up=d.map(v=>v/len);
  const radius=e.getSurfaceRadiusAt(f.state.position);
  f.state.position=e.position.map((v,i)=>v+up[i]*(radius+2200));
  f.state.velocity=e.velocity.map((v,i)=>v-up[i]*35);f.grounded=false;f.groundedDir=null;f.launched=true;f._spawnProtectionTimer=0;f.state.throttle=0;f.syncVisualTransform();
 });
 await page.waitForSelector('.surface-readout:not([hidden])');await capture('landing','.surface-readout');
 await page.evaluate(()=>{
  const f=window.__challenger.flight,m=f.system.bodyByName('moon');
  const point=[m.position[0],m.position[1]+m.radius,m.position[2]];
  const radius=m.getSurfaceRadiusAt(point);
  f.state.position=[m.position[0],m.position[1]+radius+1000,m.position[2]];
  f.state.velocity=[...m.velocity];f.state.throttle=0;f.syncVisualTransform();
 });
 await page.click('[data-action="map"]');await page.select('#transfer-target','earth');await capture('return','#transfer-go');
 await writeFile('src/ui/TutorialFrames.json',JSON.stringify(frames,null,2)+'\n');
 console.log('Captured six tutorial frames with mobile close-ups.');
}finally{await browser.close();}
