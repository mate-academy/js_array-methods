'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    if (separator === '') {
      for (let i = 0; i < this.length; i++) {
        resultString += this[i];
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        if (this[i] !== null && this[i] !== undefined) {
          resultString += this[i];
        }

        if (i !== this.length - 1) {
          resultString += separator;
        }
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
