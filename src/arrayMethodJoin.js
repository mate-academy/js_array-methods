'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinString = '';
    let modifiedSeparator = separator;

    if (separator === null) {
      modifiedSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        joinString += this[i];
        break;
      }

      joinString += this[i] + modifiedSeparator;
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
