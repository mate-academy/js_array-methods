'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let separ = separator;
    const length = this.length - 1;

    if (separator === null) {
      separ = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      switch (this[i]) {
        case null:
        case undefined:
          if (i !== length) {
            str += separ;
          }
          break;
        default:
          str += this[i];

          if (i !== length) {
            str += separ;
          }
          break;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
