'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    const lastArg = this.length - 1;

    for (let arg = 0; arg < this.length; arg++) {
      if (this[arg] !== null && this[arg] !== undefined) {
        string += this[arg];
      }

      if (arg !== lastArg) {
        string += separator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
