'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    function nullReplace(item) {
      if (item === null || item === undefined) {
        return '';
      } else {
        return item;
      }
    }

    let newSep = separator;

    if (separator === null || separator === undefined) {
      newSep = 'null';
    } else if (this.length < 2) {
      newSep = '';
    }

    let result = nullReplace(this[0]);

    for (let i = 1; i < this.length; i++) {
      result += newSep + nullReplace(this[i]);
    }

    return String(result);
    // write code here
  };
}

module.exports = applyCustomJoin;
