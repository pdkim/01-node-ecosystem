const greet = require('../lib/greet.js');

describe('greet module', () => {

  it('should return null when passed non string', () => {
    expect(greet()).toBeNull();
  });

  it('should return "hello ryo" when passed ryo', () => {
    let expected = 'hello ryo';
    let actual = greet('ryo');
    expect(actual).toBe(expected);
  })
});