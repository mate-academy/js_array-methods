'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  // Using __proto__ is not recommended. Instead, use Array.prototype
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] !== 'undefined' && this[i] !== null) {
        str += this[i];
      }

      if (i === this.length - 1) {
        break;
      }

      str += separator;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
