'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let result = '';
    let separatorSymbol = ',';

    if (this.length === 0) {
      return '';
    }

    if (separator !== undefined) {
      separatorSymbol = (separator === null) ? 'null' : separator;
    }

    if ((this[0] !== null) && (this[0] !== undefined)) {
      result += this[0];
    }

    for (let i = 1; i < this.length; i++) {
      if ((this[i] === null) || (this[i] === undefined)) {
        result += separatorSymbol;
        continue;
      }

      result += separatorSymbol + this[i];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
