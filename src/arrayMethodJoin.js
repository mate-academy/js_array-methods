'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const newArr = [];

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        newArr[i] = '';
      } else {
        newArr[i] = this[i];
      }
    }

    let result = `${newArr[0]}`;
    let newSep = separator;

    if (separator === undefined) {
      newSep = ',';
    }

    for (let i = 1; i < this.length; i++) {
      result += `${newSep}`+ `${newArr[i]}`;
    }

    if (this.length === 0) {
      result = '';
    }

    return result;
  };
}

module.exports = applyCustomJoin;
