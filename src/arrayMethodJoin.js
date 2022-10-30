'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      switch (true) {
        case i === this.length - 1 && this[i] === undefined:
          break;

        case i === this.length - 1:
          result += this[i];
          break;

        case separator === null:
          result += this[i] + 'null';
          break;

        case this[i] === null:
        case this[i] === undefined:
          result += separator;
          break;

        default:
          result += this[i] + separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
