'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(arg = ',') {
    if (arg === null) { arg = 'null'; }
    let result = '';
    for (let i = 0; i < this.length; i++) {
      if (this.length === 0) return result;
      if (this.length > 0) {
        if (i === this.length - 1) {
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
