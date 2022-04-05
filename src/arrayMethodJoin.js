'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0 || this === undefined) {
      return '';
    }

    let separ = separator;

    if (separator === undefined) {
      separ = ',';
    }

    if (separator === null) {
      separ = 'null';
    }

    let newString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        if (i !== this.length - 1) {
          newString += ',';
        }
      } else {
        i === this.length - 1
          ? newString += this[i]
          : newString += this[i] + separ;
      }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
