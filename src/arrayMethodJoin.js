'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinString = '';

    if (this.length === 0) {
      return joinString;
    }

    if (this.length === 1) {
      return `${this[0]}`;
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        joinString += `${this[i]}`;
      } else if (this[i] === null || this[i] === undefined) {
        joinString += `${separator}`;
      } else {
        joinString += `${this[i]}${separator}`;
      }
    }

    return joinString;
  };
};

module.exports = applyCustomJoin;
