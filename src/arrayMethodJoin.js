'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringJoin = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (i !== this.length - 1) {
        stringJoin += String(this[i]) + separator;
      } else {
        stringJoin += String(this[i]);
      }
    }

    return stringJoin;
  };
}

module.exports = applyCustomJoin;
