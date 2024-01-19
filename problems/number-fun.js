function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if(n < 1 || n > 1000000) {
    throw new RangeError('n should be between 1 and 1000000')
  }
  if (typeof n !== 'number') {
    throw new TypeError('n should be between 1 and 1000000')
  }
  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal
};
