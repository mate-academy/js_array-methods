'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (Array.isArray(this) && this.length > 1) {
      if (this[0] === null || this[0] === undefined) {
        this[0] = '';
      }

      let str = `${this[0]}`;

      for (let i = 1; i < this.length; i++) {
        if (this[i] === null || this[i] === undefined) {
          this[i] = '';
        }
        str += `${separator}` + `${this[i]}`;
      }

      return str;
    }

    return `${this}`;
  };
}

module.exports = applyCustomJoin;
