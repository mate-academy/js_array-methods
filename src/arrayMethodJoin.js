'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separatedString = '';
    const lastIndex = this.length - 1;

    for (let index = 0; index < this.length; index++) {
      if (index === lastIndex && this[index] === null) {
        separatedString += ``;
      } else if (index === lastIndex && this[index] === undefined) {
        separatedString += ``;
      } else if (index === lastIndex) {
        separatedString += `${this[index]}`;
      } else if (this[index] === null || this[index] === undefined) {
        separatedString += `${separator}`;
      } else {
        separatedString += `${this[index]}${separator}`;
      }
    }

    return separatedString;
  };
}

module.exports = applyCustomJoin;
