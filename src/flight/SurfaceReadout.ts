import { gameMetres } from './GameUnits';
export function surfaceReadout(altitude: number, verticalSpeed: number, grounded: boolean) {
 const height=Math.max(0,gameMetres(altitude));
 verticalSpeed=gameMetres(verticalSpeed);
 const seconds=height/Math.max(.1,-verticalSpeed);
 const visible=!grounded && verticalSpeed<-.1 && (height<100000 || seconds<60);
 return {visible,height:height<1000?`${Math.round(height)} m`:`${(height/1000).toFixed(1)} km`,
  descent:`↓ ${Math.max(0,-verticalSpeed).toFixed(1)} m/s`,
  time:seconds<600?`~${Math.max(1,Math.ceil(seconds))} s to surface`:'At current descent speed',
  near:height<300 || seconds<30,progress:Math.max(0,Math.min(1,1-Math.log10(1+height)/Math.log10(20001)))};
}
