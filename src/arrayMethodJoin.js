'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringAfterJoin = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (element !== null && element !== undefined) {
        stringAfterJoin += element;
      }

      if (i < this.length - 1) {
        stringAfterJoin += separator;
      }
    }

    return stringAfterJoin;
  };
}

module.exports = applyCustomJoin;
