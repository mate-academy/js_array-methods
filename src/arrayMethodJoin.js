'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    let valueArray;

    const joinedSeparator = `${separator}`;

    for (let i = 0; i < this.length; i++) {
      if (i !== this.length - 1) {
        if (this[i] === null || this[i] === undefined) {
          this[i] = '';
        }
        valueArray = this[i] + joinedSeparator;
      } else if (i === this.length - 1) {
        valueArray = this[i];
      }
      joinedString += valueArray;
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
