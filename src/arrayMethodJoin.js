'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const arr = [...this];
    let separ = separator;

    let string = '';

    if (arr.length < 1) {
      return '';
    }

    if (arr.length === 1) {
      return `${arr[0]}`;
    }

    if (separ === null) {
      separ = 'null';
    }

    for (let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] === null || arr[i] === undefined) {
        arr[i] = '';
      }

      if (!separ && separ !== '') {
        string += (arr[i] + ',');
      }

      if (separ === '') {
        string += arr[i];
      }

      if (separ) {
        string += (arr[i] + separ);
      }
    }

    if (arr[arr.length - 1] === null
      || arr[arr.length - 1] === undefined) {
      arr[arr.length - 1] = '';
    }
    string += arr[arr.length - 1];

    return string;
  };
}

module.exports = applyCustomJoin;
