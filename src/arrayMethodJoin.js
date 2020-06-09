'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let finalString = '';
    let separatorCopy = separator;

    if (separator === undefined) {
      separatorCopy = ',';
    }

    if (separator === null) {
      separatorCopy = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (this.length - i === 1) {
        finalString += this[i];

        return finalString;
      }

      finalString += this[i] + separatorCopy;
    }

    return finalString;
  };
}

module.exports = applyCustomJoin;
