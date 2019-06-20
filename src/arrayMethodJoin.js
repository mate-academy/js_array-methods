'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newSep = separator;
    if (separator === null || separator === undefined) {
      newSep = 'null';
    } else if (this.length < 2) {
      newSep = '';
    }
    let result = (this[0] === null || this[0] === undefined) ? '' : this[0];
    for (let i = 1; i < this.length; i++) {
      result += newSep + ((this[i] === null || this[i] === undefined)
        ? '' : this[i]);
    }
    const strResult = String(result);
    return strResult;
    // write code here
  };
}

module.exports = applyCustomJoin;
