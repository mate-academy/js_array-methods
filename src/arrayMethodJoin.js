'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let separ = separator;

    switch (separ) {
      case undefined:
        separ = ',';
        break;

      case null:
        separ = 'null';
        break;
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1 && this[i] === undefined) {
        continue;
      }

      if (this[i] === undefined || this[i] === null) {
        result += ',';
        continue;
      }

      if (i === this.length - 1) {
        result += String(this[i]);
      } else {
        result += String(this[i]) + separ;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
