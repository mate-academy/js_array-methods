'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultJoin = '';

    for (const element of this) {
      if (element !== null && element !== undefined) {
        resultJoin += element;
      }

      if (this.indexOf(element) !== this.length - 1) {
        resultJoin += separator;
      }
    }

    return resultJoin;
  };
}

module.exports = applyCustomJoin;
