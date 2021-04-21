'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let separatorString = '';

    if (!separator && separator !== '' && separator !== null) {
      separatorString = ',';
    } else if (separator === null) {
      separatorString = 'null';
    } else {
      separatorString = '' + separator;
    }

    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null) {
        result += '';
      } else if (this[i] === undefined) {
        result += '';
      } else {
        result += this[i];
      }

      if (i < this.length - 1) {
        result += separatorString;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
