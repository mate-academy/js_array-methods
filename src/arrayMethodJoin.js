'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultingString = '';

    if (this.length > 0) {
      for (let elementIndex = 0; elementIndex < this.length; elementIndex++) {
        if (this[elementIndex] !== null && this[elementIndex] !== undefined) {
          resultingString += this[elementIndex];
        }

        if (elementIndex < this.length - 1) {
          resultingString += String(separator);
        }
      }
    }

    return resultingString;
  };
}

module.exports = applyCustomJoin;
