'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    let result = '';
    let sep = '';

    if (separator === undefined) {
      sep = ',';
    } else if (separator === null) {
      sep = 'null';
    } else {
      sep = separator.toString();
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        result += '' + sep;
      } else if (i !== this.length - 1 && this.length !== 1) {
        result += this[i] + sep;
      } else {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
