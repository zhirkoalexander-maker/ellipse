import { it, expect } from 'vitest';
import { gasColor, ringGeometry, ringTexture } from '../../src/planets/GasAppearance';
it('joins cloud colors at the longitude seam and poles', () => {
 for (const kind of ['jupiter','saturn'] as const) {
  for (const v of [0,.2,.5,.8,1]) expect(gasColor(kind,0,v)).toEqual(gasColor(kind,1,v));
  for (const v of [0,1]) expect(gasColor(kind,.2,v)).toEqual(gasColor(kind,.7,v));
 }
});
it('maps ring bands radially with transparent divisions', () => {
 const geom=ringGeometry(100), uv=geom.attributes.uv!, p=geom.attributes.position!;
 for(let i=0;i<p.count;i++) {
  const r=Math.hypot(p.getX(i),p.getY(i));
  expect(uv.getX(i)).toBeCloseTo((r-123)/109,5);
 }
 const data=ringTexture().image.data;
 expect(data[Math.round(.7*1023)*4+3]).toBe(0);
 expect(data[Math.round(.5*1023)*4+3]).toBeGreaterThan(200);
});

it('places the red storm in the southern hemisphere of the sphere', () => {
 const south=gasColor('jupiter',.33,.39), north=gasColor('jupiter',.33,.61);
 expect(south[0]! / south[1]!).toBeGreaterThan(north[0]! / north[1]!);
});
