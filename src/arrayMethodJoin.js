'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (separator === undefined) {
        if (i === this.length - 1) {
          str += this[i];
        } else {
          str += this[i] + ',';
        }
      } else if (separator === null) {
        if (i === this.length - 1) {
          str += this[i];
        } else {
          str += this[i] + 'null';
        }
      } else {
        if (i === this.length - 1) {
          str += this[i];
        } else {
          str += this[i] + separator;
        }
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
