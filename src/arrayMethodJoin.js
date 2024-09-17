'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    function setCharAt(str, index, chr) {
      if (index > str.length - 1) {
        return str;
      }

      return str.substring(0, index) + chr + str.substring(index + 1);
    }

    let result = this.toString();

    if (separator !== undefined) {
      for (let q = 0; q < result.length; q++) {
        if (result[q] === ',') {
          result = setCharAt(result, q, separator);
        }
      }

      return result;
    } else {
      return result;
    }
  };
}

module.exports = applyCustomJoin;
