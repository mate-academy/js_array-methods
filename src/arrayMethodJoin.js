'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let separ = separator;

    if (typeof separ === 'undefined') {
      for (let i = 0; i < this.length; i++) {
        str += this[i];
      }

      return str;
    } else if (separator === null) {
      separ = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        if (i === this.length - 1) {
          break;
        } else {
          str += separ;
        }
      } else if (this[i] === '') {
        break;
      } else if (i === this.length - 1) {
        str += this[i];
      } else {
        str += this[i] + separ;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
