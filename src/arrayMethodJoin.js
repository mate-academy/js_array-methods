'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    if (this.length === 0) {
      return '';
    }

    let joinStrFromArr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        joinStrFromArr += this[i];
      }

      if (i !== this.length - 1) {
        joinStrFromArr += String(separator);
      }
    }

    return joinStrFromArr;
  };
}

module.exports = applyCustomJoin;
