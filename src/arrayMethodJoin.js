'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let temp = '';
    let n = 0;

    for (const element of this) {
      if (n) {
        temp += `${separator}`;
      }

      if (element !== null && element !== undefined) {
        temp += `${element}`;
      }
      n++;
    }

    return temp;
  };
}

module.exports = applyCustomJoin;
