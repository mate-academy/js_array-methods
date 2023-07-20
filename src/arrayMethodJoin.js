'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    const join2 = [...this];
    let result = '';

    for (let i = 0; i < join2.length; i++) {
      if (join2[i] === undefined || join2[i] === null) {
        join2[i] = '';
      }

      if (i === 0) {
        result += join2[i];
      }

      if (i > 0) {
        result = result + separator + join2[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
