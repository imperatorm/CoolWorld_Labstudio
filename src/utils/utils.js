/**
 * Clamp value
 * @param {number}  min - start value
 * @param {number}  max - end value
 * @param {number}  a   - alpha value
 * @return {number} clamped value
 */

const clamp = (min = 0, max = 1, a) => Math.min(max, Math.max(min, a));

/**
 * Calculate lerp
 * @param {number}  x   - start value
 * @param {number}  y   - end value
 * @param {number}  a   - alpha value
 * @return {number} lerp value
 */

const lerp = (x, y, a) => x * (1 - a) + y * a;

/**
 * Calculate inverted lerp
 * @param {number}  x   - start value
 * @param {number}  y   - end value
 * @param {number}  a   - alpha value
 * @return {number} inverted lerp value
 */

const invlerp = (x, y, a) => clamp((v - x) / (a - x));

/**
 * Round number to the specified precision.
 *
 * This function is necessary because `Number.prototype.toPrecision()`
 * and `Number.prototype.toFixed()`
 *
 * @param  {number}  number      - The floating point number to round.
 * @param  {number}  [precision] - The number of digits to appear after the decimal point.
 * @return {number} The rounded number.
 */
const roundNumber = (number, precision = 2) => {
  return Number.parseFloat(number.toPrecision(precision));
};

const map = (value, min0, max0, min1, max1) => {
  return min1 + ((value - min0) / (max0 - min0)) * (max1 - min1);
};

const mapRange = (inMin, inMax, outMin, outMax, value) => {
  const inRange = inMax - inMin;
  const outRange = outMax - outMin;
  return outMin + (((value - inMin) / inRange) * outRange || 0);
};

export { clamp, lerp, invlerp, roundNumber, map, mapRange };
