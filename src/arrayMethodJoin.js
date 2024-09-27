'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringJoy = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }
      stringJoy += this[i];

      if (i !== this.length - 1) {
        stringJoy += separator;
      }
    }

    return stringJoy;
  };
}

module.exports = applyCustomJoin;
