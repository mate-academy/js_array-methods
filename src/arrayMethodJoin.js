'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    if (typeof separator !== 'undefined' && separator !== null) {
      for (let i = 0; i < this.length; i++) {
        if (i !== this.length - 1 && this.length !== 0) {
          if (this[i] === undefined || this[i] === null) {
            str += separator;
          } else {
            str += this[i] + separator;
          }
        } else {
          str += this[i];
        }
      }
    }

    if (typeof separator === 'undefined') {
      for (let i = 0; i < this.length; i++) {
        if (i !== this.length - 1 && this.length !== 0) {
          str += this[i] + ',';
        } else {
          str += this[i];
        }
      }
    }

    if (separator === null) {
      for (let i = 0; i < this.length; i++) {
        if (i !== this.length - 1 && this.length !== 0) {
          str += this[i] + 'null';
        } else {
          str += this[i];
        }
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
