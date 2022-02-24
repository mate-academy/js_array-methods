'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    if (this.length > 0) {
      let part = '';

      if (this[0] !== undefined && this[0] !== null) {
        part = this[0];
      }
      str += part;
    }

    for (let i = 1; i < this.length; i++) {
      let part = '';

      if (this[i] !== undefined && this[i] !== null) {
        part = this[i];
      }
      str += String(separator) + part;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
