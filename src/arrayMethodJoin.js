'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultSting = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        resultSting += this[i];
      }

      if (i !== this.length - 1) {
        resultSting += separator;
      }
    }

    return resultSting;
  };
}

module.exports = applyCustomJoin;
