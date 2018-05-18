module.exports = arithmetic = {};

arithmetic.add = function(a, b) {
  let total;
  if(typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  total = a + b;
  return total;
};

arithmetic.sub = function(a, b) {
  let total;
  if(typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  total = a - b;
  return total;
};