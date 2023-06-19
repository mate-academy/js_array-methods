'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const separatorElement = separator !== undefined ? separator : ',';

    const copyArray = [...this];
    let result = '';

    for (let i = 0; i < copyArray.length; i++) {
      if (copyArray[i] === undefined || copyArray[i] === null) {
        copyArray[i] = '';
      }

      result += copyArray[i];

      if (i !== copyArray.length - 1) {
        result += separatorElement;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
