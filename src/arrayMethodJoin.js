'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    const sep = '' + separator;

    for (let i = 0; i < this.length; i++) {
      if (typeof (this[i]) === 'undefined' || typeof (this[i]) === 'object') {
        if (i !== this.length - 1) {
          str += '' + sep;
        }
      } else if (i !== this.length - 1) {
        str += this[i] + sep;
      } else {
        str += this[i];
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
