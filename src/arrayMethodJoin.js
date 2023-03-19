'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const sep = String(separator);

    for (let i = 0; i < this.length; i++) {
      switch (true) {
        case i === (this.length - 1) && !this[i]:
          return result;
        case this[i] === null:
        case this[i] === undefined:
          result += sep;
          break;
        case (i + 1) !== this.length:
          result += this[i] + sep;
          break;
        default:
          result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
