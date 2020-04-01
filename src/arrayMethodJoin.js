'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '' + this[0];
    let sep = separator;

    if (this.length === 0) {
      return '';
    }

    if (this[0] === null || this[0] === undefined) {
      str = '';
    }

    if (separator === undefined && separator !== null) {
      sep = ',';
    }

    if (separator === null) {
      sep = 'null';
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        str += sep + '';
      } else {
        str += sep + this[i];
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
