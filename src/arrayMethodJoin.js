'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let separ = separator;
    if (separ === undefined) {
      separ = ',';
    } else if (separ === null) {
      separ = 'null';
    } else if (typeof separ === 'object') {
      separ = separator.toString();
    }
    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += separ;
      } else {
        result += this[i] + separ;
      }
    }
    return result.slice(0, result.length - separ.length);
  };
}

module.exports = applyCustomJoin;
