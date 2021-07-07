'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    const newArray = [ ...this ];

    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] === null || newArray[i] === undefined) {
        newArray[i] = '';
      }

      if (i !== 0) {
        str += separator;
      }
      str += newArray[i];
    }

    return str;
  };
}

module.exports = applyCustomJoin;
