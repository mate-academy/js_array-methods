'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const newArr = [];
    let result = [];
    const newSep = `${separator}`;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        newArr[i] = '';
      } else {
        newArr[i] = this[i];
      }

      result += `${newArr[i]}` + newSep;
    }

    if (this.length === 0) {
      result = '';
    }

    if (separator === '') {
      return result;
    }

    return result.slice(0, newSep.length * -1);
  };
}

module.exports = applyCustomJoin;
