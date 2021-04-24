'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let sep = separator;

    if (this.length === 0) {
      return str;
    }

    if (sep === null) {
      sep = `${separator}`;
    }

    for (let i = 0; i < this.length; i++) {
      if (i === 0) {
        if (!(this[i] === null || this[i] === undefined)) {
          str = `${this[0]}`;
        }
      } else {
        if (this[i] === null || this[i] === undefined) {
          str += sep;
        } else {
          str += sep + this[i];
        }
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
