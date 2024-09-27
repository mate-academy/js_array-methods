'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      const elementOfArr = this[i];

      if (elementOfArr !== undefined && elementOfArr !== null) {
        joinedString += elementOfArr;
      };

      if (i !== (this.length - 1)) {
        joinedString += separator;
      };
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
