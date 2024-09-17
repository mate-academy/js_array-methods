'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringFromArr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        stringFromArr += this[i];
      }

      if (i !== this.length - 1) {
        stringFromArr += separator;
      }
    }

    return stringFromArr;
  };
}

module.exports = applyCustomJoin;
