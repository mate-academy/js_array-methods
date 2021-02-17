'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    if (this.length === 1) {
      resultString += this;
    }

    if (this.length > 1) {
      if (this[0] !== null) {
        resultString += this[0];
      }

      for (let i = 1; i < this.length; i++) {
        if (separator === null) {
          resultString += null + this[i].toString();
        } else if (this[i] === null || this[i] === undefined) {
          resultString += separator;
        } else {
          resultString += separator + this[i];
        }
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
