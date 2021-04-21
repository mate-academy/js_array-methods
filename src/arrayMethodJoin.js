'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let sep = separator;
    let res = '';
    const tmp = '';

    if (separator === null) {
      sep = 'null';
    }

    for (let index = 0; index < this.length - 1; index++) {
      if (
        this[index] === null
        || this[index] === undefined
      ) {
        res += tmp + sep;
        continue;
      }

      res += this[index] + sep;
    }

    if (
      this[this.length - 1] === null
      || this[this.length - 1] === undefined
    ) {
      res += tmp;
    } else {
      res += this[this.length - 1];
    }

    return res;
  };
}

module.exports = applyCustomJoin;
