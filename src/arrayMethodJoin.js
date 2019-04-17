'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(arg = ',') {
    if (arg === null) { arg = 'null'; }
    let result = '';
    const arrayLength = this.length;
    for (let i = 0; i < arrayLength; i++) {
      if (arrayLength === 0) return result;
      if (arrayLength > 0) {
        if (i === arrayLength - 1) {
          result += this[i];
        } else {
          if (this[i] === null || this[i] === undefined) {
            this[i] = '';
          }
          result += this[i] + arg;
        }
      }
    }
    return result;
  };
}

module.exports = applyCustomJoin;
