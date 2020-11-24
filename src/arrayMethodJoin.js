'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  // Using __proto__ is not recommended. Instead, use Array.prototype
  [].__proto__.join2 = function(separator) {
    // Compute empty array and array with length 1
    if (!this.length) {
      return '';
    }

    if (!this.length === 1) {
      return this[0];
    }

    // Join array with more than 1 elements
    let sep = separator;
    let str = '';

    if (typeof sep === 'undefined') {
      sep = ',';
    } else if (sep === null) {
      sep = 'null';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (typeof this[i] === 'undefined' || this[i] === null) {
        str += sep;
      } else {
        str += this[i] + sep;
      }
    }

    str += this[this.length - 1];

    return str;
  };
}

module.exports = applyCustomJoin;
