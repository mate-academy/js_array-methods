'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let res = '';
    const sep = separator === undefined ? ',' : separator;

    for (let i = 0; i < this.length; i++) {
      if (i === 0) {
        res = convertToString(this[i]);
        continue;
      }
      res = res.concat(sep, convertToString(this[i]));
    }

    return res;
  };
}

function convertToString(obj) {
  if (obj === undefined || obj === null) {
    return '';
  }

  return `${obj}`;
}

module.exports = applyCustomJoin;
