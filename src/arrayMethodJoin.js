'use strict';

/*
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here

    let newStr = `${this[0]}`;

    if (this[0] === undefined || this[0] === null) {
      newStr = '';
    }

    let separatorDefault = separator;

    if (this.length === 0) {
      return '';
    }

    if (separatorDefault === null) {
      separatorDefault = 'null';
    }

    if (separatorDefault === undefined) {
      separatorDefault = ',';
    }

    for (let i = 1; this.length > i; i++) {
      if (this[i] === undefined || this[i] === null) {
        newStr += separatorDefault;
      } else {
        newStr += separatorDefault + this[i];
      }
    }

    return newStr;
  };
}

module.exports = applyCustomJoin;
