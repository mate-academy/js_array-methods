'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const thisStr = this.toString();
    let result = '';

    if (separator !== undefined) {
      for (let i = 0; i < thisStr.length; i++) {
        if (thisStr.charAt(i) !== ',') {
          result = result + thisStr.charAt(i);
        } else {
          result = result + separator;
        }
      }

      return result;
    } else {
      return thisStr;
    }
  };
}

module.exports = applyCustomJoin;
