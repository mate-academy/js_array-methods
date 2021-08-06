'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let testString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        testString += separator;
      } else if (i === this.length - 1) {
        testString += `${this[i]}`;
      } else {
        testString += `${this[i]}${separator}`;
      }
    };

    return testString;
  };
}

module.exports = applyCustomJoin;
