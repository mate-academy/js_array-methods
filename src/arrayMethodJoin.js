'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let whole = '';
    const maxIndex = this.length - 1;

    for (let i = 0; i <= maxIndex; i++) {
      if (this[i] === null || this[i] === undefined) {
        whole += '';
      } else {
        whole += this[i];
      }

      if (i !== maxIndex) {
        whole += separator;
      }
    }

    return whole;
  };
}

module.exports = applyCustomJoin;
