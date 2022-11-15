'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';
    let newSeparator = separator;
    const copyArray = [...this];

    for (let i = 0; i < copyArray.length; i++) {
      if (copyArray[i] === null) {
        copyArray[i] = '';
      } else if (copyArray[i] === undefined) {
        copyArray[i] = '';
      }
    }

    switch (separator) {
      case null:
        newSeparator = 'null';
        break;

      case undefined:
        newSeparator = ',';
        break;
    }

    switch (copyArray.length) {
      case 0:
        break;

      case 1:
        newString = copyArray[0].toString();
        break;

      default:
        newString = copyArray[0].toString();

        for (let index = 1; index < copyArray.length; index++) {
          newString += newSeparator.toString() + copyArray[index];
        }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
