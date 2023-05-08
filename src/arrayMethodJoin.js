'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let separ = 'null';

    if (separator !== null) {
      separ = separator.toString();
    }

    if (this.length === 0) {
      return result;
    }

    for (let i = 0; i < this.length; i++) {
      let value = this[i];

      if (value === undefined || value === null) {
        value = '';
      }

      result += value;

      if (i !== this.length - 1) {
        result += separ;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
