'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';
    let sign = separator;

    if (separator === undefined) {
      sign = ',';
    }

    if (separator === null) {
      sign = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        string += '';
      } else {
        string += this[i];
      }

      if (i !== this.length - 1) {
        string += sign;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
