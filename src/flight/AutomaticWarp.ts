/** Automatic acceleration follows distance continuously; manual coast warp is separate. */
export function automaticWarp(altitude: number, targetAltitude: number, targetSpeed: number, _journey: number): number {
 const cruiseLimit=40;
 const departure=1+Math.max(0,altitude-1000)/30000;
 const approach=1+Math.max(0,targetAltitude-10000)/50000;
 const visibleApproach=Math.max(1,targetAltitude/Math.max(1,targetSpeed)/30);
 return Math.max(1,Math.min(cruiseLimit,departure,approach,visibleApproach));
}
