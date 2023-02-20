'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (element !== undefined && element !== null) {
        joined += element;
      }

      if (i !== this.length - 1) {
        joined += separator;
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
