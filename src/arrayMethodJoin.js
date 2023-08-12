'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      if (typeof (this[i]) !== 'undefined' && this[i] !== null) {
        resultString += `${this[i]}`;
      }

      resultString += `${i < this.length - 1 ? separator : ''}`;
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
