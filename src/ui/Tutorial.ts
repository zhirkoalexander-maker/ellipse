import { Lifetime } from '../core/Lifetime';
import './Tutorial.css';

const KEY='ellipse_tutorial_seen';
let seenThisSession=false;
export function shouldShowTutorial():boolean {
  if(seenThisSession)return false;
  try {return localStorage.getItem(KEY)!=='1';} catch {return true;}
}
const rocket=`<g class="tour-rocket"><path d="M-11 25 L0 65 L11 25" fill="#ff993e" class="tour-flame"/><path d="M-13 15 L-24 32 L-13 30 M13 15 L24 32 L13 30" fill="#738396"/><rect x="-13" y="-25" width="26" height="53" rx="3" fill="#e4e7eb"/><path d="M-13-25 Q-12-48 0-57 Q12-48 13-25" fill="#f8f8f5"/><rect x="-13" y="5" width="26" height="7" fill="#d37c38"/><circle cx="0" cy="-29" r="5" fill="#48acd7"/></g>`;
const earth='<circle cx="125" cy="225" r="57" fill="#286ca1"/><path d="M88 186l34-10 20 22-24 18 5 29-26 7-17-32z" fill="#64985b"/>';
const moon='<circle cx="465" cy="90" r="31" fill="#c8c6be"/><circle cx="458" cy="83" r="8" fill="#a8a69f"/><circle cx="477" cy="100" r="5" fill="#aaa89f"/>';
const route=(home=false)=>`<svg viewBox="0 0 600 320" aria-hidden="true">${earth}${moon}<path d="M160 180 Q280 0 442 107" fill="none" stroke="#73d9ff" stroke-width="2" stroke-dasharray="6 7"/><g class="${home?'tour-return':'tour-transfer'}">${rocket}</g><text x="104" y="303">Earth</text><text x="446" y="43">Moon</text></svg><div class="tour-map-choice">Map → ${home?'Earth':'Moon'}<span>Autopilot to destination</span></div>`;
const steps=[
  {title:'Start here',text:'Flight gives you a ready-made rocket. To build your own, open Vehicle assembly.',scene:`<div class="tour-menu"><span>ELLIPSE</span><div>Flight</div><div class="tour-highlight">Vehicle assembly</div><div>Guide</div></div>`},
  {title:'Build a rocket',text:'Add an engine, two fuel tanks, then a capsule. Press Take to pad.',scene:`<div class="tour-builder"><div class="tour-parts"><span>Engine</span><span>Fuel tank ×2</span><span>Capsule</span></div><svg viewBox="0 0 300 320" aria-hidden="true"><g transform="translate(150 260)"><path class="tour-part tour-engine" d="M-18-20H18L27 5H-27Z" fill="#8e9ba9"/><rect class="tour-part tour-tank" x="-20" y="-110" width="40" height="88" rx="4" fill="#e1e5e7"/><path class="tour-part tour-capsule" d="M-20-114Q-19-157 0-174Q19-157 20-114Z" fill="#f2f1eb"/><rect x="-20" y="-73" width="40" height="7" fill="#d37c38"/></g></svg><div class="tour-pad-button">Take to pad →</div></div>`},
  {title:'Lift off',text:'Press Launch or Space. Wait for the countdown. ↑ adds throttle; W/S and A/D steer.',scene:`<svg viewBox="0 0 600 320" aria-hidden="true"><path d="M0 285Q100 257 240 282T600 280V320H0Z" fill="#506b3d"/><rect x="235" y="279" width="130" height="10" fill="#79828b"/><g class="tour-launch">${rocket}</g><text x="34" y="52">Launch / Space</text><text x="34" y="82">↑ Throttle</text></svg>`},
  {title:'Fly to the Moon',text:'Open Map. Choose Moon, then Autopilot to destination. It launches, flies and lands for you.',scene:route()},
  {title:'Land gently',text:'Watch Above surface. Keep fuel to slow down. L turns on landing assist; Landing view shows the ground.',scene:`<svg viewBox="0 0 600 320" aria-hidden="true"><path d="M0 275Q130 240 250 280T600 270V320H0Z" fill="#8c8c85"/><g class="tour-landing">${rocket}</g><text x="30" y="52">Above surface</text><text x="30" y="87" class="tour-height">Keep fuel for braking</text></svg><div class="tour-map-choice">L · Landing assist</div>`},
  {title:'Come back',text:'Keep fuel for the return. On the Moon, open Map → Earth → Autopilot to destination. It flies home and lands.',scene:route(true)},
];

export class Tutorial {
  private life=new Lifetime();
  private root=document.createElement('div');
  private index=0;
  private playing=!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  private timer:ReturnType<typeof setTimeout>|undefined;
  private previousFocus=document.activeElement as HTMLElement|null;
  constructor(private onClose:()=>void) {
    this.root.className='tutorial';this.root.setAttribute('role','dialog');this.root.setAttribute('aria-modal','true');this.root.setAttribute('aria-labelledby','tour-title');
    this.root.innerHTML='<div class="tour-card"><header><span>Quick tour</span><button data-tutorial="skip">Skip</button></header><div class="tour-screen"></div><div class="tour-caption" aria-live="polite"><small></small><h2 id="tour-title"></h2><p></p></div><footer><button data-tutorial="back">Back</button><button data-tutorial="pause">Pause</button><button data-tutorial="next">Next →</button></footer></div>';
    this.life.append(this.root);
    this.life.listen(this.root,'click',e=>{
      const action=(e.target as HTMLElement).closest<HTMLElement>('[data-tutorial]')?.dataset.tutorial;
      if(action==='skip'){this.finish();return;}
      if(action==='next'){if(this.index===steps.length-1){this.finish();return;}this.index++;}
      if(action==='back')this.index=Math.max(0,this.index-1);
      if(action==='pause'){this.playing=!this.playing;this.render(false);return;}
      if(action)this.render();
    });
    this.life.listen(window,'keydown',e=>{
      e.stopImmediatePropagation();
      if(e.key==='Escape'){e.preventDefault();this.finish();}
      if(e.key==='Tab'){
        const buttons=[...this.root.querySelectorAll<HTMLButtonElement>('button:not(:disabled)')];
        const first=buttons[0]!,last=buttons.at(-1)!;
        if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
        else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
      }
    },{capture:true});
    this.life.listen(document,'visibilitychange',()=>{if(document.hidden){this.playing=false;this.render(false);}});
    this.render();this.root.querySelector<HTMLButtonElement>('[data-tutorial=skip]')!.focus();
  }
  private render(updateScene=true):void {
    clearTimeout(this.timer);
    const step=steps[this.index]!;
    if(updateScene)this.root.querySelector('.tour-screen')!.innerHTML=step.scene;
    this.root.querySelector('h2')!.textContent=step.title;
    this.root.querySelector('.tour-caption p')!.textContent=step.text;
    this.root.querySelector('small')!.textContent=`${this.index+1} / ${steps.length}`;
    this.root.classList.toggle('tour-paused',!this.playing);
    if(updateScene&&!this.playing)for(const animation of this.root.getAnimations?.({subtree:true})??[])animation.currentTime=4000;
    this.root.querySelector<HTMLButtonElement>('[data-tutorial=back]')!.disabled=this.index===0;
    this.root.querySelector('[data-tutorial=pause]')!.textContent=this.playing?'Pause':'Play';
    this.root.querySelector('[data-tutorial=next]')!.textContent=this.index===steps.length-1?'Done':'Next →';
    if(this.playing)this.timer=setTimeout(()=>{if(this.index<steps.length-1){this.index++;this.render();}else{this.playing=false;this.render(false);}},9000);
  }
  private finish():void {
    seenThisSession=true;try{localStorage.setItem(KEY,'1');}catch{}
    this.dispose();this.previousFocus?.focus();this.onClose();
  }
  dispose():void {clearTimeout(this.timer);this.life.dispose();}
}
