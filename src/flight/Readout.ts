/** Keep instrument readings short without changing the displayed physical scale. */
export function formatReadout(value: number, unit: 'm' | 'm/s', decimals = 0, signed = false): [string, string] {
  const prefixes = ['', 'k', 'M', 'G', 'T'];
  let scaled = value, index = 0;
  while (Math.abs(scaled) >= 1000 && index < prefixes.length - 1) {
    scaled /= 1000;
    index++;
  }
  const sign = signed && value > 0 ? '+' : '';
  return [sign + scaled.toFixed(index > 0 ? 1 : decimals), prefixes[index] + unit];
}
