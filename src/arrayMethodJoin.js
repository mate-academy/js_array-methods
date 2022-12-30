'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const copyArray = [...this];
    let joinString = '';
    let stringSeparator = '';

    if (separator === undefined) {
      stringSeparator = ',';
    } else {
      stringSeparator = '' + separator;
    }

    for (let i = 0; i < copyArray.length; i++) {
      if (copyArray[i] === null || copyArray[i] === undefined) {
        copyArray[i] = '';
      }

      if (i !== copyArray.length -1) {
        joinString += copyArray[i] + stringSeparator;
      } else {
        joinString += copyArray[i];
      }
    }

    return joinString;
  };
}
module.exports = applyCustomJoin;
