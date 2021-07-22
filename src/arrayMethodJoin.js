'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        if (this[i] === null || this[i] === undefined) {
          string += '';
        } else {
          string += this[i];
        }
      } else {
        if (this[i] === null || this[i] === undefined) {
          string += '' + String(separator);
        } else {
          string += this[i] + String(separator);
        }
      }
    };

    return string;
  };
}

module.exports = applyCustomJoin;
