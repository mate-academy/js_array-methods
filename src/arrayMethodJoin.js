'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const copy = this.slice();

    for (let i = 0; i < copy.length; i++) {
      if (copy[i] === null || copy[i] === undefined) {
        copy[i] = '';
      }

      result += copy[i];

      if (i !== copy.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
