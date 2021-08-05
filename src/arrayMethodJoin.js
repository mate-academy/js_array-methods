'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let separator2 = separator;

    if (typeof separator === 'undefined') {
      separator2 = ',';
    }

    let testString = '';

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] === 'object' || typeof this[i] === 'undefined') {
        testString += `${separator2}`;
      } else if (i === this.length - 1) {
        testString += `${this[i]}`;
      } else {
        testString += `${this[i]}${separator2}`;
      }
    };

    return testString;
  };
}

module.exports = applyCustomJoin;
