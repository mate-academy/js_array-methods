'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    let separatorCopy = separator;
    const length = this.length;

    for (let i = 0; i < length; i++) {
      const element = this[i];

      if (i === length - 1) {
        separatorCopy = '';
      }

      if (element === null || element === undefined) {
        joinedString += separatorCopy;
      } else {
        joinedString += `${element}${separatorCopy}`;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
