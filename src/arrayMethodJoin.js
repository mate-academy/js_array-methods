'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const copy = [...this];

    let res = '';

    let sep = separator + '';

    if (separator === undefined) {
      sep = ',';
    }

    if (typeof separator === 'number') {
      return;
    }

    for (let item = 0; item < copy.length; item++) {
      if (copy[item] === null
        || copy[item] === undefined
        || copy[item] === '') {
        copy[item] = '';
      }

      if (copy.indexOf(copy[item]) !== copy.length - 1) {
        copy[item] += sep;
      }
      res += copy[item];
    }

    return res;
  };
}

module.exports = applyCustomJoin;
