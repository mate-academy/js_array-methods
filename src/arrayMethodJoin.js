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
    }

    for (let i = 0; i < this.length; i++) {
      const verificatStr = this[i];

      if (verificatStr === null || verificatStr === undefined) {
        result += '';
      } else if (verificatStr.toString() === 'null') {
        result += 'null';
      } else {
        result += verificatStr.toString();
      }

      if (i < this.length - 1) {
        result += separ;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
