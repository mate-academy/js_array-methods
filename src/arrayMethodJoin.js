'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinString = '';
    let valueArray;

    const joinSeparator = `${separator}`;

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== this[this.length - 1]) {
        if (this[i] === null || this[i] === undefined) {
          this[i] = '';
        }
        valueArray = this[i] + joinSeparator;
      } else if (this[i] === this[this.length - 1]) {
        valueArray = this[i];
      }
      joinString += valueArray;
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
