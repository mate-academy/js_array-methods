'use strict';

/*
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let newStr = '';

    for (let i = 0; this.length > i; i++) {
      if (!(this[i] === undefined) && !(this[i] === null)) {
        newStr += this[i];
      }

      if (i !== this.length - 1) {
        newStr += separator;
      }
    }

    return newStr;
  };
}

module.exports = applyCustomJoin;
