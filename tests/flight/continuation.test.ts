import {expect,it,beforeEach} from 'vitest';
import {FlightScene} from '../../src/scenes/FlightScene';
import {Renderer} from '../../src/core/Renderer';
import {SceneManager} from '../../src/core/SceneManager';
import {Achievements} from '../../src/core/Achievements';
import {Missions} from '../../src/core/Missions';
import {buildDefaultRocket,buildSystem} from './fixtures';
import {loadFlightState} from '../../src/storage/SaveLoad';
beforeEach(()=>localStorage.clear());
function create(save?:any):any{
 const f:any=new FlightScene(new Renderer(),new SceneManager(),buildSystem(),buildDefaultRocket(),new Achievements(),new Missions(),save);
 if(!save){const e=f.system.bodyByName('earth');f.state.position=[e.position[0],e.position[1]+e.radius+100000,e.position[2]];f.state.velocity=[...e.velocity];f.grounded=false;f.groundedDir=null;f.launched=true;}
 return f;
}
it('restores standalone landing assist and saved stability attitude',()=>{
 for(const mode of ['landing','hold']){
 const f=create();f.state.throttle=.6;f.landingAssist=mode==='landing';f.sasMode=mode==='hold'?'hold':'off';f.sasTargetQuat.setFromAxisAngle({x:1,y:0,z:0},.3);f.persistFlight();const save=loadFlightState();f.dispose();
 const next=create(save);try{expect(next.landingAssist).toBe(mode==='landing');expect(next.sasMode).toBe(mode==='hold'?'hold':'off');expect(next.state.throttle).toBe(.6);expect(next.sasTargetQuat.angleTo(f.sasTargetQuat)).toBeLessThan(.00001);}finally{next.dispose();}
 }
});
it('restores same-body autopilot and the original mission accounting',()=>{
 const f=create();f.missionTime=100;f.startMission('earth',true);f.missionTime=150;f.persistFlight();const save=loadFlightState();const fuel=f.autopilotStartFuel,mass=f.autopilotStartMass;f.dispose();
 const next=create(save);try{expect(next.autopilotActive).toBe(true);expect(next.autopilotTarget).toBe('earth');expect(next.autopilotStartMissionTime).toBe(100);expect(next.autopilotStartFuel).toBe(fuel);expect(next.autopilotStartMass).toBe(mass);}finally{next.dispose();}
});
