'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        string += this[i];
        break;
      }

      if (this[i] == null || typeof this[i] === 'undefined') {
        string += separator;
      } else {
        string += this[i] + String(separator);
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
