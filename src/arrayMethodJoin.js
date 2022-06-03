'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const newArr = [...this];
    let sep = separator;
    let result = '';

    if (sep === null) {
      sep = 'null';
    }

    for (let i = 0; i < newArr.length; i++) {
      let tempEl = newArr[i];

      if (tempEl === null || tempEl === undefined) {
        tempEl = '';
      }

      if (i !== newArr.length - 1) {
        tempEl += sep;
      }

      result += tempEl;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
