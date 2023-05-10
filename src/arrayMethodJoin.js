'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newStr = '';
    const lastIndex = this.length - 1;

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        newStr += this[i];
      };

      if (i !== lastIndex) {
        newStr += `${separator}`;
      };
    }

    return newStr;
  };
}

// applyCustomJoin();

// ['test', 'test'].join2('--');

module.exports = applyCustomJoin;
