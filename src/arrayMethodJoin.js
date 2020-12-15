'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(prop) {
    // write code here
    let str = '';
    let sep = prop;

    if (this.length === 0) {
      return '';
    }

    if (prop === null) {
      sep = 'null';
    }

    if (prop === undefined) {
      sep = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        if (i === this.length - 1) {
          str += this[i];
        } else {
          str += this[i] + sep;
        }
      } else {
        str += sep;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
