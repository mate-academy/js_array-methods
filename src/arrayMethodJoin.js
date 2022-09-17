'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let sep = separator;
    let string = `${this[0]}`;

    if (sep === null) {
      sep = 'null';
    }

    if (this[0] === null) {
      string = '';
    }

    if (this.length === 0) {
      return '';
    }

    for (let i = 1; i < this.length; i++) {
      if (typeof this[i] === 'undefined' || this[i] === null) {
        this[i] = '';
      }

      string += sep + this[i];
    }

    return string;
  };
}

module.exports = applyCustomJoin;
