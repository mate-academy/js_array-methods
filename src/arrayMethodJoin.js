'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    this.forEach((el, i) => {
        if (el === null || el === undefined) {
          joinedString += separator;
        } else if (i !== this.length - 1) {
        joinedString += el + `${separator}`;
        } else {
        joinedString += el;
      }
    })
  return joinedString;
  };
}

module.exports = applyCustomJoin;
