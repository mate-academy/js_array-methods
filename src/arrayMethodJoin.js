'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr;

    if (this[0] === null || this[0] === undefined) {
      joinedStr = '';
    } else {
      joinedStr = `${this[0]}`;
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        joinedStr += `${separator}` + '';
      } else {
        joinedStr += `${separator}` + `${this[i]}`;
      }
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
