'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const arrLength = [...this].length;
    let separ = separator;
    let string = '';

    if (arrLength < 1) {
      return '';
    }

    if (arrLength === 1) {
      return `${this[0]}`;
    }

    if (separ === null) {
      separ = 'null';
    }

    for (let i = 0; i < arrLength - 1; i += 1) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (!separ && separ !== '') {
        string += (this[i] + ',');
      }

      if (separ === '') {
        string += this[i];
      }

      if (separ) {
        string += (this[i] + separ);
      }
    }

    if (this[arrLength - 1] === null
      || this[arrLength - 1] === undefined) {
      this[arrLength - 1] = '';
    }
    string += this[arrLength - 1];

    return string;
  };
}

module.exports = applyCustomJoin;
