'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let s = separator;

    if (separator === null) {
      s = 'null';
    }

    if (separator === undefined) {
      s = ',';
    }

    let string = '';

    for (let i = 0; i < this.length; i++) {
      string += this[i] === null || this[i] === undefined
        ? ''
        : this[i];

      if (i !== this.length - 1) {
        string += s;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
