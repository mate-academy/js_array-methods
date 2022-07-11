'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const arrLength = [...this].length;
    const lastElem = arrLength - 1;
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

    for (let i = 0; i < lastElem; i++) {
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

    if (this[lastElem] === null
      || this[lastElem] === undefined) {
      this[lastElem] = '';
    }
    string += this[lastElem];

    return string;
  };
}

module.exports = applyCustomJoin;
