'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedArray = '';
    const lastIndex = this.length - 1;

    for (let i = 0; i < this.length; i++) {
      if (this[i] != null) {
        joinedArray += this[i];
      };

      if (i !== lastIndex) {
        joinedArray += separator;
      };
    }

    return joinedArray;
  };
}

module.exports = applyCustomJoin;
