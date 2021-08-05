'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let phrase = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (typeof this[i] === 'number'
      || typeof this[i] === 'string'
      || typeof this[i] === 'boolean') {
        phrase += `${this[i]}` + `${separator}`;
      } else {
        phrase += `` + `${separator}`;
      }
    }

    return phrase + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
