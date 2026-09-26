import { expect, it } from 'vitest';
import { navballFrame, pitchDirection } from '../../src/flight/Navball';
it('keeps the horizon fixed to the planet when pitching and rolling', () => {
  const up: [number,number,number] = [0,1,0];
  const vertical = navballFrame(up, [0,0,-1]);
  const horizon = pitchDirection(up,[1,0,0],0);
  expect(vertical.project(horizon).z).toBeCloseTo(0);
  expect(vertical.project(up).z).toBeCloseTo(1);
  const level = navballFrame([1,0,0],up);
  expect(level.project(horizon).y).toBeCloseTo(0);
  const rolled = navballFrame([1,0,0],[0,0,1]);
  expect(Math.abs(rolled.project(up).x)).toBeCloseTo(1);
});
