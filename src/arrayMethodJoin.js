'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (let elem = 0; elem < this.length; elem++) {
      if (this[elem] !== null && this[elem] !== undefined) {
        resultString += this[elem];
      }

      if (elem !== this.length - 1) {
        resultString += separator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
