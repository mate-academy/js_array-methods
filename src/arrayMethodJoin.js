'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let res = '';
    const thisStr = this.toString();

    if (separator !== undefined) {
      for (let i = 0; i < thisStr.length; i++) {
        if (thisStr.charAt(i) !== ',') {
          res = res + thisStr.charAt(i);
        } else {
          res = res + separator;
        }
      }

      return res;
    } else {
      return thisStr;
    }
  };
}

module.exports = applyCustomJoin;
