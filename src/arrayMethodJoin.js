'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arrayLength = this.length;
    let convertedString = '';

    for (let i = 0; i < arrayLength; i++) {
      const checkUndefinedOrNull = (this[i] === undefined || this[i] === null);

      convertedString += checkUndefinedOrNull
        ? ''
        : this[i];

      const checkArrayEnd = i !== arrayLength - 1;

      convertedString += checkArrayEnd
        ? separator
        : '';
    }

    return convertedString;
  };
}

module.exports = applyCustomJoin;
