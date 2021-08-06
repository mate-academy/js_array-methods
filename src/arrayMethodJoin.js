'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    if (this.length === 0) {
      return '';
    }

    let separatorCopy = separator;

    if (separator === null) {
      separatorCopy = 'null';
    }

    if (separator === undefined) {
      separatorCopy = 'undefined';
    }

    if (typeof separatorCopy === 'object') {
      separatorCopy = '[object Object]';
    }

    if (this.length > 1) {
      let output = '';

      for (let item of this) {
        if (item === null || item === undefined) {
          item = '';
        }
        output += item + separatorCopy;
      }

      if (separator === '') {
        return output;
      }

      return output.slice(0, -separatorCopy.length);
    }

    return String(this[0]);
  };
}

module.exports = applyCustomJoin;
