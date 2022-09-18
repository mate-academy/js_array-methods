'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let separatorCopy = separator;

    if (typeof separatorCopy === 'undefined') {
      separatorCopy = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this.length === 1) {
        result += this[i];
        break;
      }

      if (typeof this[i] === 'undefined' || this[i] === null) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        result += this[i];
        break;
      }

      result += this[i] + `${separatorCopy}`;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
