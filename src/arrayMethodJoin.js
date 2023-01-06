'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let newString = '';
    const newArray = [];

    if (this.length === 0) {
      return '';
    }

    if (this.length === 1) {
      return '' + this[0];
    }

    for (const item of this) {
      if (separator === undefined) {
        newArray.push(item, ',');
        continue;
      }

      if (item === undefined || item === null) {
        newArray.push('', ',');
      } else {
        newArray.push(item, separator);
      }
    }

    if (separator === '') {
      for (const item of newArray) {
        newString += item;
      }

      return newString;
    }

    for (let i = 0; i < newArray.length - 1; i++) {
      newString += newArray[i];
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
