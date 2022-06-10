'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resStr = '';

    for (const i of this) {
      if (i !== undefined && i !== null) {
        resStr += i;
      }

      if (i === this[this.length - 1]) {
        break;
      }

      resStr += separator;
    }

    return resStr;
  };
}

module.exports = applyCustomJoin;
