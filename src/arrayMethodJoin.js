'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedElements = '';
    let delimiter = separator;

    switch (delimiter) {
      case undefined:
        delimiter = ',';
        break;

      case null:
        delimiter = 'null';
        break;

      default:
        break;
    }

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null && this[i] !== []) {
        joinedElements += this[i];
      }

      if (i !== this.length - 1) {
        joinedElements += delimiter;
      }
    }

    return joinedElements;
  };
}

module.exports = applyCustomJoin;
