'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (Array.isArray(this) && this.length > 1) {
      let str;

      if (this[0] === null || this[0] === undefined) {
        str = '';
      } else {
        str = `${this[0]}`;
      }

      let arrValue;

      for (let i = 1; i < this.length; i++) {
        if (this[i] === null || this[i] === undefined) {
          arrValue = '';
        } else {
          arrValue = `${this[i]}`;
        }
        str += separator + arrValue;
      }

      return str;
    }

    return `${this}`;
  };
}

module.exports = applyCustomJoin;
