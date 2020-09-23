'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';
    let separatorAfterCheck;

    if (separator || separator === '' || separator === null) {
      separatorAfterCheck = `${separator}`;
    } else {
      separatorAfterCheck = ',';
    }

    for (const el of this) {
      if (el === null || el === undefined) {
        string += ',';
        continue;
      }

      if (el === this[this.length - 1]) {
        string += el;
        continue;
      }

      string += el + separatorAfterCheck;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
