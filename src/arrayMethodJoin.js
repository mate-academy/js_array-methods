'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separatedString = '';
    const lastIndex = this.length - 1;

    for (let i = 0; i < this.length; i++) {
      let temp = this[i];

      if (this[i] === null || this[i] === undefined) {
        temp = '';
      }

      if (i !== lastIndex) {
        separatedString += temp + String(separator);
      } else {
        separatedString += temp;
      }
    }

    return separatedString;
  };
}

module.exports = applyCustomJoin;
