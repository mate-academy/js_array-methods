'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].proto.join2 = function(separator = ',') {
    let resultString = '';

    for (let index = 0; index < this.length; index++) {
      if (this[index] !== null && this[index] !== undefined) {
        resultString += this[index];
      }

      if (index !== this.length - 1) {
        resultString += separator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
