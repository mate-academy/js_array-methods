'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    let s = separator;

    if (separator === null) {
      s = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        if (i === this.length - 1) {
          string += this[i];
        } else {
          string += this[i] + s;
        }
      } else {
        if (i === this.length - 1) {
          string += '';
        } else {
          string += '' + s;
        }
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
