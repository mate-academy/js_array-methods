'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let myString = '';
    const cloneArray = [...this];

    for (let i = 0; i < cloneArray.length; i++) {
      if (separator === undefined) {
        // eslint-disable-next-line no-param-reassign
        separator = ',';
      }

      if (cloneArray[i] === undefined || cloneArray[i] === null) {
        cloneArray[i] = '';
      }

      if (i > 0) {
        myString += separator;
      }
      myString += cloneArray[i];
    }

    return myString;
  };
}

module.exports = applyCustomJoin;
