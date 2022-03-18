import { random } from '../random';

export interface FakeOptions {
  length?: number;
}

type Return<T, O extends FakeOptions> = [O] extends [never]
  ? T
  : O['length'] extends number
  ? T[]
  : T;

export function fake<T, Options extends FakeOptions>(
  data: T[] | ((i: number) => T),
  options?: Options
): Return<T, Options> {
  const dataSource = Array.isArray(data) ? () => randElement(data) : data;

  if (!options?.length) {
    return dataSource(0) as any;
  }

  return Array.from({ length: options.length }, (_, index) =>
    dataSource(index)
  ) as any;
}

export function randElement<T>(arr: T[]) {
  return arr[Math.floor(random() * arr.length)];
}

export interface RandomInRangeOptions {
  min?: number;
  max?: number;
  fraction?: number;
  precision?: number;
}

export function getRandomInRange({
  min = 1.0,
  max = 9999.99,
  fraction = 0,
  precision = 1,
}: RandomInRangeOptions = {}) {
  const randNum = Number((random() * (max - min) + min).toFixed(fraction));
  return Math.floor(randNum / precision) % precision;
}
