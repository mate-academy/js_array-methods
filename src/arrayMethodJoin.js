'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newStr = '';

    for (const i of this) {
      if (i === this[this.length - 1]) {
        if (i != null) {
          newStr += String(i);
        }
      } else {
        if (i == null) {
          newStr += '' + separator;
        } else {
          newStr += String(i) + separator;
        }
      }
    }

    return newStr;
  };
}

module.exports = applyCustomJoin;
