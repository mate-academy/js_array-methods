'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (i !== (this.length - 1)) {
        if (typeof this[i] === 'undefined' || this[i] === null) {
          str += '';
          str += separator;
        } else {
          str += this[i];
          str += separator;
        }
      } else {
        if (typeof this[i] === 'undefined' || this[i] === null) {
          str += '';
        } else {
          str += this[i];
        }
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
