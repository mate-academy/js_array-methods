'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const separatorToString = String(separator);
    let newJoin = '';
    const lastSymbol = this[this.length - 1];

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        newJoin += this[i] + separatorToString;
      } else {
        newJoin += separatorToString;
      }
    }

    if (lastSymbol !== null && lastSymbol !== undefined) {
      newJoin += lastSymbol;
    }

    return newJoin;
  };
}

module.exports = applyCustomJoin;
