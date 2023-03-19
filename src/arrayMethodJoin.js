'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultStr = '';

    for (const one of this) {
      if (one === this[this.length - 1]) {
        resultStr += one !== undefined && one !== null ? one : '';
        continue;
      } else {
        resultStr += one !== undefined && one !== null ? one : '';
        resultStr += separator;
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
