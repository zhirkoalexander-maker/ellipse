import { expect, it } from 'vitest';
import { formatReadout } from '../../src/flight/Readout';

it('keeps normal flight values and uses short metric units for long readings', () => {
  expect(formatReadout(200, 'm')).toEqual(['200', 'm']);
  expect(formatReadout(100, 'm/s', 1)).toEqual(['100.0', 'm/s']);
  expect(formatReadout(12500, 'm')).toEqual(['12.5', 'km']);
  expect(formatReadout(1e6, 'm')).toEqual(['1.0', 'Mm']);
  expect(formatReadout(2.5e9, 'm')).toEqual(['2.5', 'Gm']);
  expect(formatReadout(1e12, 'm')).toEqual(['1.0', 'Tm']);
});

it('keeps the sign of vertical speed when its units change', () => {
  expect(formatReadout(50, 'm/s', 0, true)).toEqual(['+50', 'm/s']);
  expect(formatReadout(-10000, 'm/s', 0, true)).toEqual(['-10.0', 'km/s']);
  expect(formatReadout(0, 'm/s', 0, true)).toEqual(['0', 'm/s']);
});
