import { storageKey } from '../storage/MigrateLegacySaves';
import { Lifetime } from '../core/Lifetime';
import './Tutorial.css';
import frames from './TutorialFrames.json';

const KEY = () => storageKey('tutorial_seen');
let seenThisSession=false;
export function shouldShowTutorial():boolean {
  if(seenThisSession)return false;
  try {return localStorage.getItem(KEY())!=='1';} catch {return true;}
}
type Lesson = {title:string;text:string;frame:keyof typeof frames;alt:string;note?:string};
const steps: Lesson[] = [
  {title:'Pick a rocket',text:'Choose Flight to use the ready-made rocket. To build one, open Vehicle assembly.',frame:'menu',alt:'The game menu, with Flight selected.',note:'Use an English keyboard layout for the letter keys.'},
  {title:'Four parts to start',text:'Start with an S engine, two 5 t tanks and an S capsule, in that order. Press Take to pad.',frame:'assembly',alt:'A four-part rocket in Vehicle assembly, beside the parts list and Take to pad button.'},
  {title:'Start the engines',text:'Press Launch or Space. After the countdown, ↑ / ↓ adjust power. W/S and A/D steer.',frame:'launch',alt:'The starter rocket on its launch pad, with the Launch button below.'},
  {title:'Next stop: Moon',text:'Open Map, select Moon and press Autopilot to destination. It handles the flight and landing.',frame:'moon',alt:'The map destination panel with Moon selected and the autopilot button below.'},
  {title:'Watch the ground',text:'Above surface shows the gap to the ground. Point the engine down and brake early. L switches on landing assist.',frame:'landing',alt:'A descending rocket and its Above surface readout, showing height and descent speed.'},
  {title:'Come home',text:'Select Earth in Map, then start autopilot again. Check your fuel before leaving the Moon.',frame:'return',alt:'The map destination panel with Earth selected for the return flight.'},
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
    this.root.innerHTML='<div class="tour-card"><header><span>How to play</span><button data-tutorial="skip">Close</button></header><div class="tour-screen"></div><div class="tour-caption" aria-live="polite"><small></small><h2 id="tour-title"></h2><p></p><div class="tour-note"></div></div><footer><button data-tutorial="back">Back</button><button data-tutorial="pause">Pause</button><button data-tutorial="next">Next</button></footer></div>';
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
    if(updateScene) {
      const base = `${import.meta.env.BASE_URL}tutorial/${step.frame}`;
      const focus = (rect:number[]) => `left:${rect[0]}%;top:${rect[1]}%;width:${rect[2]}%;height:${rect[3]}%`;
      const screen = this.root.querySelector('.tour-screen')!;
      screen.innerHTML = `<picture><source media="(max-width:600px)" srcset="${base}-close.webp"><img src="${base}.webp" width="960" height="640" alt="" decoding="async"></picture><span aria-hidden="true" class="tour-focus tour-focus-wide" style="${focus(frames[step.frame].wide)}"></span><span aria-hidden="true" class="tour-focus tour-focus-close" style="${focus(frames[step.frame].close)}"></span>`;
      screen.querySelector('img')!.alt=step.alt;
    }
    this.root.querySelector('h2')!.textContent=step.title;
    this.root.querySelector('.tour-caption p')!.textContent=step.text;
    this.root.querySelector('.tour-note')!.textContent=step.note ?? '';
    this.root.querySelector('small')!.textContent=`${this.index+1} / ${steps.length}`;
    this.root.classList.toggle('tour-paused',!this.playing);

    this.root.querySelector<HTMLButtonElement>('[data-tutorial=back]')!.disabled=this.index===0;
    this.root.querySelector('[data-tutorial=pause]')!.textContent=this.playing?'Pause':'Play';
    this.root.querySelector('[data-tutorial=next]')!.textContent=this.index===steps.length-1?'Done':'Next';
    if(this.playing)this.timer=setTimeout(()=>{if(this.index<steps.length-1){this.index++;this.render();}else{this.playing=false;this.render(false);}},9000);
  }
  private finish():void {
    seenThisSession=true;try{localStorage.setItem(KEY(),'1');}catch{}
    this.dispose();this.previousFocus?.focus();this.onClose();
  }
  dispose():void {clearTimeout(this.timer);this.life.dispose();}
}
