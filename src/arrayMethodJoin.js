'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let newSeparator;

    if (separator === undefined) {
      newSeparator = ',';
    } else {
      newSeparator = separator;
    }

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if ((this[i] === null)
      || (this[i] === undefined
        && (i !== this.length - 1))) {
        result += newSeparator;
      } else if (this[i] !== undefined && i === this.length - 1) {
        result += this[i];
      } else if (i !== this.length - 1) {
        result += this[i];
        result += newSeparator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
