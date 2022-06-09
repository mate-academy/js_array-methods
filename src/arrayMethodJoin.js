'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] !== 'undefined' && this[i] !== null) {
        if (i !== this.length - 1) {
          str = str + this[i] + separator;
        } else {
          str = str + this[i];
        }
      } else if (typeof this[i] === 'undefined' && i === this.length - 1) {
        return str;
      } else {
        str = str + ',';
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
