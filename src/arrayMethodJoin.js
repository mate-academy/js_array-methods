'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let resultingString = '';
    if (separator === undefined) {
      separator = ',';
    };
    if (this.length === 0) {
      return resultingString;
    };
    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        resultingString += separator;
      } else if (i !== (this.length - 1)) {
        resultingString += String(this[i]) + separator;
      } else {
        resultingString += String(this[i]);
      };
    };
    return resultingString;
  };
}

module.exports = applyCustomJoin;
