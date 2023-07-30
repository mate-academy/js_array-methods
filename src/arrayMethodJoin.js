'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinArray = '';
    let secondSeparator = separator;

    if (separator === null) {
      secondSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        if (i === this.length - 1) {
          joinArray += this[i];
        } else {
          joinArray += this[i] + secondSeparator;
        }
      } else {
        if (i !== this.length - 1) {
          joinArray += secondSeparator;
        }
      }
    }

    return joinArray;
  };
}

module.exports = applyCustomJoin;
