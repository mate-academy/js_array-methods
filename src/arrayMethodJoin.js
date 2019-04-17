'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(arg = ',') {
    if (arg === null) { arg = 'null'; }
    let result = '';
    const arrayLength = this.length;
    if (arrayLength === 0) return result;
    for (let i = 0; i < arrayLength; i++) {
      if (i === arrayLength - 1) {
        result += this[i];
      } else {
        this[i] === null || this[i] === undefined
          ? result += '' + arg
          : result += this[i] + arg;
      }
    }
    return result;
  };
}

module.exports = applyCustomJoin;
