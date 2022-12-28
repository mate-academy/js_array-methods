'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const addition = String(separator);
    let newStr = '';

    if (this.length === 0) {
      return newStr;
    }

    for (let i = 0; i < this.length - 1; i++) {
      switch (this[i]) {
        case null:
          newStr += '' + addition;
          break;
        case undefined:
          newStr += '' + addition;
          break;
        default:
          newStr += this[i] + addition;
          break;
      }
    }

    if (this[this.length - 1] !== null
    && this[this.length - 1] !== undefined) {
      newStr += this[this.length - 1];
    }

    return newStr;
  };
}

module.exports = applyCustomJoin;
