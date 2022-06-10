'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let returnString = '';
    const copyArray = this;
    const parseSeparator = separator === null ? 'null' : separator;

    for (let i = 0; i < copyArray.length; i++) {
      if (copyArray[i] !== undefined && copyArray[i] !== null) {
        returnString += copyArray[i];
      }

      if (this.length - 1 !== i) {
        returnString += parseSeparator;
      }
    }

    return returnString;
  };
}

module.exports = applyCustomJoin;
