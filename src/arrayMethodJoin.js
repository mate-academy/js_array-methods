'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let returnString = '';
    let defaultSeparator = '';

    defaultSeparator = separator === undefined ? ',' : separator + '';

    for (let index = 0; index < this.length; index++) {
      if (this[index] === null || this[index] === undefined) {
        returnString += defaultSeparator;
      } else if (index !== this.length - 1) {
        returnString += this[index] + defaultSeparator;
      } else {
        returnString += this[index];
      }
    }

    return returnString;
  };
}

module.exports = applyCustomJoin;
