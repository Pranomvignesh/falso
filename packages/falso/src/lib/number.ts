import {
  fake,
  FakeOptions,
  getRandomInRange,
  RandomInRangeOptions,
} from './core/core';

export interface RandomNumberOptions extends FakeOptions {
  min?: number;
  max?: number;
  precision?: number;
}

/**
 * Generate a random number.
 *
 * @category general, math
 *
 * @example
 *
 * randNumber()
 *
 * @example
 *
 * randNumber({ length: 10 })
 *
 * @example
 *
 * randNumber({ min: 10, max: 1000 }) // default is 'min': 0, 'max': 999_999
 *
 * @example
 *
 * randNumber({ min : 10, max:1000, precision:100})
 * // Will output a random number between 10 and 1000 and a multiple of precision
 *
 */
export function randNumber<Options extends RandomNumberOptions = never>(
  options?: Options
) {
  const config: RandomInRangeOptions = {
    min: options?.min || 0,
    max: options?.max || 999_999,
    precision: options?.precision || 1,
  };

  return fake(() => getRandomInRange(config), options);
}
