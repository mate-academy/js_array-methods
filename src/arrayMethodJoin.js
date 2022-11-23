'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separ = separator;

    if (this.length === 0) {
      return '';
    }

    if (this.length === 1) {
      return this.toString();
    }

    if (separator === null) {
      separ = 'null';
    }

    let newstr = '';

    for (let i = 0; i < this.length; i++) {
      if (!(this[i] === undefined || this[i] === null)) {
        newstr += this[i];
      }

      if (i < this.length - 1) {
        newstr += separ;
      }
    }

    return newstr;
  };
}

module.exports = applyCustomJoin;
