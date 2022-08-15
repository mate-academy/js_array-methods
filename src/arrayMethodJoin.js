'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    const modifiedArray = [];

    for (const element of this) {
      if (element === undefined || element === null) {
        modifiedArray[modifiedArray.length] = '';
      } else {
        modifiedArray[modifiedArray.length] = element;
      }
    }

    let resultString = `${modifiedArray[0]}`;

    for (let i = 1; i < modifiedArray.length; i++) {
      resultString += `${separator}${modifiedArray[i]}`;
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
