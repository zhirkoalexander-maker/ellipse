import {it,expect,beforeEach} from 'vitest';
import {Missions} from '../../src/core/Missions';
beforeEach(()=>localStorage.clear());
it('completes the 7000 m/s mission',()=>{
 const m=new Missions();m.evaluate({launched:false,altitude:0,maxAltitude:0,speed:7100,maxSpeed:7100,grounded:false,nearestBody:'earth',refBody:'earth',bound:false,apoapsis:0,periapsis:0,stageSeparations:0,softLanded:false});
 expect(m.getCompleted()).toContain('ev_astronaut');
});
it('keeps old mission progress when points are removed',()=>{
 localStorage.setItem('ellipse_missions_completed',JSON.stringify(['ev_astronaut']));localStorage.setItem('ellipse_missions_score','0');
 expect(new Missions().isCompleted('ev_astronaut')).toBe(true);
});

it('keeps completed missions without awarding money or points',()=>{
 const m=new Missions();m.recordLanding('moon');
 expect(m.isCompleted('land_moon')).toBe(true);
 expect(localStorage.getItem('ellipse_missions_score')).toBeNull();
 expect(document.body.textContent).not.toMatch(/\(\+\d+\)/);
 expect(new Missions().isCompleted('land_moon')).toBe(true);
});
