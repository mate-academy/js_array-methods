'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let separ = separator;
    const length = this.length - 1;

    if (typeof separ === 'undefined') {
      for (let i = 0; i < this.length; i++) {
        str += this[i];
      }

      return str;
    } else if (separator === null) {
      separ = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      switch (this[i]) {
        case null:
        case undefined:
          if (i === length) {
            break;
          } else {
            str += separ;
          }
          break;
        case '':
          break;
        default:
          if (i === length) {
            str += this[i];
          } else {
            str += this[i] + separ;
          }
          break;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
