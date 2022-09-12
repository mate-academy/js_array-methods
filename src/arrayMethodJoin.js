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

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        string += '' + sign;
      } else {
        string += this[i] + sign;
      }
    }

    const lastElement = this[this.length - 1];

    if (lastElement === null || lastElement === undefined) {
      string += '';
    } else {
      string += lastElement;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
