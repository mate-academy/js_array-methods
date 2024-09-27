'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const separ = '' + separator;
    let str = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        str += ',';
      } else {
        str += this[i] + separ;
      }
    }

    if (this[this.length - 1] !== undefined) {
      str += this[this.length - 1];
    }

    return str;
  };
}

module.exports = applyCustomJoin;
