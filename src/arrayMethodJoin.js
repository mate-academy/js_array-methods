'use strict';

/**
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinReturn = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinReturn += this[i];
      }

      if (i !== this.length - 1) {
        joinReturn += `${separator}`;
      }
    }

    return joinReturn;
  };
}

module.exports = applyCustomJoin;
