import { randNumber } from '../lib/number';

describe('number', () => {
  it('with precision', () => {
    const randNum = randNumber({
      min: 10,
      max: 1000,
      precision: 100,
    });
    expect(randNum).toBeGreaterThan(10);
    expect(randNum).toBeLessThan(1000);
    expect(randNum % 100).toEqual(0);
  });
});
