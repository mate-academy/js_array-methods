'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let finalString = '';
    let newSeparator = separator;

    if (separator === undefined) {
      newSeparator = ',';
    }

    for (let x = 0; x < (this.length - 1); x++) {
      if (this[x] === null || this[x] === undefined) {
        this[x] = '';
      }

      finalString += `${this[x]}${newSeparator}`;
    }

    if (this[this.length - 1] === null || this[this.length - 1] === undefined) {
      finalString += '';
    } else {
      finalString += `${this[this.length - 1]}`;
    }

    // for (let key of this) {
    //   if (key === null || key === undefined) {
    //     key = '';
    //   }

    //   if ((this.length - 1) === counter) {
    //     finalString += `${key}`;
    //   } else {
    //     finalString += `${key}${newSeparator}`;
    //     counter++;
    //   }
    // }

    return finalString;
  };
}

module.exports = applyCustomJoin;
