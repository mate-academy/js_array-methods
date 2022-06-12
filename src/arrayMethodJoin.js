'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = '';

    if (separator === null) {
      // eslint-disable-next-line no-param-reassign
      separator = 'null';
    }

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        joinedStr += this[i];
      }
      joinedStr += separator;
    }

    if (this[this.length - 1] !== null && this[this.length - 1] !== undefined) {
      joinedStr += this[this.length - 1];
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
