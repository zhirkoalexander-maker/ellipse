import {it,expect,beforeEach} from 'vitest';
import {Missions} from '../../src/core/Missions';
beforeEach(()=>localStorage.clear());
it('awards the 7000 m/s mission and its points',()=>{
 const m=new Missions();m.evaluate({launched:false,altitude:0,maxAltitude:0,speed:7100,maxSpeed:7100,grounded:false,nearestBody:'earth',refBody:'earth',bound:false,apoapsis:0,periapsis:0,stageSeparations:0,softLanded:false});
 expect(m.totalScore).toBe(55);expect(m.getCompleted()).toContain('ev_astronaut');
});
it('repairs the score of a previously completed speed mission',()=>{
 localStorage.setItem('ellipse_missions_completed',JSON.stringify(['ev_astronaut']));localStorage.setItem('ellipse_missions_score','0');
 expect(new Missions().totalScore).toBe(35);
});
