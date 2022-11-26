'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let sep = separator;

    if (this.length === 0) {
      return '';
    }

    if (this.length === 1) {
      return String(this);
    }

    if (sep === null) {
      sep = 'null';
    }

    if (this[0] === null || this[0] === undefined) {
      this[0] = '';
    }

    let result = this[0];

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      result = result + sep + this[i];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
