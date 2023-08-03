'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let returnString = '';
    let separatorCopy = separator;
    // Check if our separator is undefined or null,
    // so we change it to value we need

    if (separator === undefined) {
      separatorCopy = ',';
    } else if (separator === null) {
      separatorCopy = 'null';
    }

    for (let item = 0; item < this.length - 1; item++) {
      // Change all ignored characters to separator(
      // f.e undefined or empty string, but exclude false, null, NaN)
      if (!this[item] && typeof this[item] !== 'number'
      && this[item] !== false) {
        returnString += separatorCopy;
      } else {
        returnString += this[item].toString() + separatorCopy;
      }
    }

    // Check if last character is valid and then add it to our string
    if (this[this.length - 1]) {
      returnString += this[this.length - 1];
    }

    return returnString;
  };
}

module.exports = applyCustomJoin;
