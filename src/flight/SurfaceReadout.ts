import { gameMetres } from './GameUnits';
export function surfaceReadout(altitude: number, verticalSpeed: number, grounded: boolean) {
 const height=Math.max(0,gameMetres(altitude));
 verticalSpeed=gameMetres(verticalSpeed);
 const visible=!grounded && height<20000 && verticalSpeed<-.1;
 return {visible,height:height<1000?`${Math.round(height)} m`:`${(height/1000).toFixed(1)} km`,
  descent:`↓ ${Math.max(0,-verticalSpeed).toFixed(1)} m/s`,
  near:height<100,progress:Math.max(0,Math.min(1,1-Math.log10(1+height)/Math.log10(20001)))};
}
