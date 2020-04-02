'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let separ = separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }
    }

    let stringFromArr = '';

    if (separ === undefined) {
      separ = ',';
    }

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if (i === 0) {
        // eslint-disable-next-line no-undef
        stringFromArr = this[i].toString();
      } else {
        stringFromArr += separ + this[i].toString();
      }
    }

    return stringFromArr;
  };
}

module.exports = applyCustomJoin;
