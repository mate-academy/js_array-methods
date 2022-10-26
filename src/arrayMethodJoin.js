'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const splitArr = [];
    let string = this;

    for (let i = 0; i < string.length; i++) {
      if (string[i] === null || string[i] === undefined) {
        string[i] = '';
      }

      if (i === string.length - 1) {
        splitArr[i] = string[i];
        break;
      }

      if (separator === null) {
        splitArr[i] = string[i] + 'null';
      } else {
        splitArr[i] = string[i] + separator;
      }
    }

    let str = '';

    for (const e of splitArr) {
      str += e;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
