'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null && i === 0) {
        continue;
      } else if (this[i] === null || this[i] === undefined) {
        str += separator;
        continue;
      } else if (i === 0) {
        str += this[i];
      } else {
        str += `${separator}${this[i]}`;
      }
    }

    return str;
  };
};

module.exports = applyCustomJoin;
