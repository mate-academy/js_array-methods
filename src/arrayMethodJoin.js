'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    let newSeparator = separator;
    let lastElement = this[this.length - 1];

    if (this.length === 0) {
      return string;
    }

    if (separator === null) {
      newSeparator = 'null';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        string += '' + newSeparator;
        continue;
      }
      string += String(this[i]) + newSeparator;
    }

    if (lastElement === undefined || lastElement === null) {
      lastElement = '';
    }

    return string + lastElement;
  };
}

module.exports = applyCustomJoin;
