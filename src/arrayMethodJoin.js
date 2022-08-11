'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    const last = this.length - 1;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }
      str += this[i];

      if (i !== last) {
        str += separator;
      }
    }

    return str;
  };
};

module.exports = applyCustomJoin;
