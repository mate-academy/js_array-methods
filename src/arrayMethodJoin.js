'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let separ = separator;
    const length = this.length - 1;

    if (separator === null) {
      separ = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        if (i !== length) {
          str += separ;
        }
        continue;
      }
      str += this[i];

      if (i !== length) {
        str += separ;
      }
    };

    return str;
  };
}

module.exports = applyCustomJoin;
