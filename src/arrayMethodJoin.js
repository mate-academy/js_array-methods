'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let result = '';

    if (this.length === 0) {
      return result;
    }

    let separ = separator;

    if (separ === undefined) {
      separ = ',';
    }

    if (separ === null) {
      separ = 'null';
    }

    let i = 0;

    for (i; i < this.length - 1; i++) {
      const currentElement = element(this[i]);

      result += currentElement + separ;
    }

    result += element(this[i]);

    return result;
  };
}

function element(value) {
  if (value === undefined || value === null) {
    return '';
  }

  return value;
}

module.exports = applyCustomJoin;
