'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let sep;
    let res = '';

    if (this.length === 0) {
      return res;
    }

    if (!separator) {
      sep = ',';
    } else {
      sep = separator;
    }

    if (separator === '') {
      sep = '';
    }

    if (separator === null) {
      sep = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        res += this[i];
        continue;
      }
      res += this[i] + sep;
    }

    return res;
  };
}

module.exports = applyCustomJoin;
