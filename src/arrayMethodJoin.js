'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arr = this;
    const result = [''];

    for (let i = 0; i < arr.length; i++) {
      let item;

      if (arr[i] === null || typeof arr[i] === 'undefined') {
        item = '';
      } else {
        item = String(arr[i]);
      }

      if (i !== arr.length - 1) {
        result[0] += item + String(separator);
      } else {
        result[0] += item;
      }
    }

    return result.toString();
  };
}

module.exports = applyCustomJoin;
