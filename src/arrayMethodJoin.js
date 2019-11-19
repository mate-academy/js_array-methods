'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = [];

    if (separator === undefined) {
      // eslint-disable-next-line no-param-reassign
      separator = ',';
    }

    if (separator === null) {
      // eslint-disable-next-line no-param-reassign
      separator = 'null';
    }

    // eslint-disable-next-line no-param-reassign
    separator = separator.toString();

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += '' + separator;
      } else {
        result += this[i] + separator;
      }
    }

    result += this[this.length - 1];
    return result;
  };
}

module.exports = applyCustomJoin;
