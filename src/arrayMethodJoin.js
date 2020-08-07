'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length < 1) {
      return '';
    }

    let str = '';

    for (let i = 0; i < this.length - 1; ++i) {
      if ((this[i]) === null || (this[i]) === undefined) {
        str += separator;
        continue;
      }

      str += this[i];
      str += separator;
    }

    str += this[this.length - 1];

    return str;
  };
};

module.exports = applyCustomJoin;
