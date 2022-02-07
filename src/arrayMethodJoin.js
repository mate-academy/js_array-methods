'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    const separ = (separator === undefined) ? ',' : String(separator);

    let result = element(this[0]);

    for (let i = 1; i < this.length; i++) {
      const currentElement = element(this[i]);

      result += separ + currentElement;
    }

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
