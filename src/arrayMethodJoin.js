'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const newArr = [...this];
    let newStr = '';

    for (const i of newArr) {
      if (i === newArr[newArr.length - 1]) {
        if (i != null) {
          newStr += String(i);
        }
      } else {
        if (i == null) {
          newStr += '' + separator;
          continue;
        } else {
          newStr += String(i) + separator;
        }
      }
    }

    return newStr;
  };
}

module.exports = applyCustomJoin;
