'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';

    if (this.length === 0) {
      return '';
    }

    if (this.length === 1) {
      return this[0].toString();
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }
      joined += this[i].toString() + separator;
    }

    if (this[this.length - 1] === undefined || this[this.length - 1] === null) {
      this[this.length - 1] = '';
    }

    return joined + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
