'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let valueSeparatore = separator;

    if (separator === null) {
      valueSeparatore = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      const a = this[i] === undefined
        || this[i] === null
        ? ''
        : this[i];

      if (i < this.length - 1) {
        str += a + valueSeparatore;
      } else {
        str += a;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
