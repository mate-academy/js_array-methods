'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let returnString = '';
    const parseSeparator = separator === null ? 'null' : separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        returnString += this[i];
      }

      if (this.length - 1 !== i) {
        returnString += parseSeparator;
      }
    }

    return returnString;
  };
}

module.exports = applyCustomJoin;
