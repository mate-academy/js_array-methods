'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let res = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        if (this[i] === null || this[i] === undefined) {
          res += '';
          continue;
        }

        res += this[i];
        continue;
      }
      res += check(this[i], separator);
    }

    return res;
  };
}

function check(value, separator = ',') {
  if (value === null || value === undefined) {
    return `${separator}`;
  }

  return `${value}` + `${separator}`;
}
module.exports = applyCustomJoin;
