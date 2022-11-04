'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let separ = ',';
    let str = '';

    if (separator || separator === '' || separator === null) {
      separ = separator;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        str += '';
      } else {
        str += this[i];
      }

      if (i !== (this.length - 1)) {
        str += separ;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
