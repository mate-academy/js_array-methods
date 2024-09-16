'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separatedStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        separatedStr += this[i];
      };

      if (i < this.length - 1) {
        separatedStr += separator;
      };
    }

    return separatedStr;
  };
}

module.exports = applyCustomJoin;
