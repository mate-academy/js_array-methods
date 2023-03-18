/* eslint-disable use-isnan */
/* eslint-disable no-console */
'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    const sep = String(separator);

    for (let i = 0; i < this.length; i++) {
      switch (true) {
        case (i + 1) !== this.length && this[i] === undefined:
        case (i + 1) !== this.length && this[i] === null:
        case (i + 1) !== this.length && this[i] === NaN:
          result += ',';
          break;
        case this[i] === undefined:
          break;
        case (i + 1) !== this.length && separator === undefined:
          result += String(this[i]) + ',';
          break;
        case (i + 1) !== this.length:
          result += String(this[i]) + sep;
          break;
        default:
          result += String(this[i]);
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
