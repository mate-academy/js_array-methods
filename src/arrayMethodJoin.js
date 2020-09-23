'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    let validSeparator = separator;
    const emptyValues = [null, undefined];
    const arrayValues = Object.values(this);

    if (validSeparator === undefined) {
      validSeparator = ',';
    }

    for (let i = 0; i < arrayValues.length; i++) {
      if (!emptyValues.includes(arrayValues[i])) {
        joinedString += arrayValues[i];
      }

      if (i < arrayValues.length - 1) {
        joinedString += validSeparator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
