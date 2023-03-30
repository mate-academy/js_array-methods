'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let separ = separator;
    if (separator === undefined) {
      separ = ',';
    }

    let str = '';
    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        str += this[i];
      } else if (this[i] === undefined || this[i] === null) {
        str += separ;
      } else {
        str += `${this[i]}${separ}`;
      }
    };

    return str;
  };
}

module.exports = applyCustomJoin;
