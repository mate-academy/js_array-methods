'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let returnString = '';
    let separatorCopy = separator;
    const thisLastChar = this[this.length - 1];
    // Check if our separator is undefined or null,
    // so we change it to value we need

    if (separator === undefined) {
      separatorCopy = ',';
    } else if (separator === null) {
      separatorCopy = 'null';
    }

    for (let i = 0; i < this.length - 1; i++) {
      const item = this[i];
      // Change all ignored characters to separator(
      // f.e undefined or empty string, but exclude false, null, NaN)

      if (!item && typeof item !== 'number'
      && item !== false) {
        returnString += separatorCopy;
      } else {
        returnString += item.toString() + separatorCopy;
      }
    }

    // Check if last character is valid and then add it to our string
    if (thisLastChar) {
      returnString += thisLastChar;
    }

    return returnString;
  };
}

module.exports = applyCustomJoin;
