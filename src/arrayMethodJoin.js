'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinResult = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (element !== undefined && element !== null) {
        joinResult += element;
      }

      if (i !== this.length - 1) {
        joinResult += separator;
      }
    }

    return joinResult;
  };
}

module.exports = applyCustomJoin;
