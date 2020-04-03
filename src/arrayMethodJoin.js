'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arr = this;
    let str = '';
    let separator1 = separator;

    for (let i = 0; i < arr.length; i++) {
      let str1 = arr[i];

      if (arr[i] === null || arr[i] === undefined) {
        str1 = '';
      }

      if (separator === null) {
        separator1 = 'null';
      }

      if (i === arr.length - 1) {
        str += str1;
      } else {
        str += str1 + separator1;
      }
    };

    return str;
  };
}

module.exports = applyCustomJoin;
