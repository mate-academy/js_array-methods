'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // Helper function to handle empty elements
    function stringifyElement(element) {
      return element === null || element === undefined ? '' : String(element);
    }

    let result = stringifyElement(this[0]);

    for (let i = 1; i < this.length; i++) {
      result += `${separator}` + stringifyElement(this[i]);
    }

    return result;
  };
}

module.exports = applyCustomJoin;
