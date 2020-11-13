'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  // eslint-disable-next-line space-before-function-paren
  [].__proto__.join2 = function (separator = ',') {
    // write code here

    let res = '';

    for (let el of this) {
      if (el === null || el === undefined || el === []) {
        el = '';
      }

      if (separator === null) {
        res += el <= this.length - 2 ? el + 'null' : el;
      } else {
        res += el <= this.length - 2 ? el + separator : el;
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
