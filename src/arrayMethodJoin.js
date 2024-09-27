'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultStr = '';

    for (const item of this) {
      if (item === undefined || item === null) {
        // pass
      } else {
        resultStr += item;
      }

      if (this[this.length - 1] === item) {
        break;
      }

      resultStr += separator;
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
