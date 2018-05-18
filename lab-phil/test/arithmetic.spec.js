const arithmetic = require('../lib/arithmetic.js');

describe('add module', () => {

  it('return null when passed a non number', () => {
    let str = 'not a number';
    expect(arithmetic.add(str)).toBeNull();
  });

  it('return the sum of two number values', () => {
    let a = 3;
    let b = 2;
    let expected = 5;
    expect(arithmetic.add(a, b)).toBe(expected);
  });
});

describe('subtract module', () => {

  it('return null when passed a non number', () => {
    let str = 'not a number';
    expect(arithmetic.sub(str)).toBeNull();
  });

  it('return the remainder after the second value is subtracted from first number', () => {
    let a = 3;
    let b = 2;
    let expected = 1;
    expect(arithmetic.sub(a, b)).toBe(expected);
  });
});