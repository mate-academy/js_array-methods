'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      let item = this[i];

      if (this[i] === null || this[i] === undefined) {
        item = '';
      }
      str += item;

      if (i !== this.length - 1) {
        str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
