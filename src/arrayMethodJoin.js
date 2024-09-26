'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let string = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (element !== null && element !== undefined) {
        string += element;
      }

      if (i < this.length - 1) {
        string += separator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
