'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const res = [];

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        res[res.length] = '';
      } else {
        res[res.length] = this[i];
      }
    }

    for (let i = 0; i < res.length; i++) {
      result += res[i];

      if (i !== res.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
