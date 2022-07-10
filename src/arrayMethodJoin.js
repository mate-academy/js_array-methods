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

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        break;
      }
      joined += this[i].toString() + separator;
    }

    return joined + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
