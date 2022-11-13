'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let rowOfSymbols = '';

    if (this[0] !== null) {
      rowOfSymbols = rowOfSymbols + this[0];
    } else {
      rowOfSymbols = '';
    }

    if (this.length === 0) {
      rowOfSymbols = '';
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        rowOfSymbols += ',';
      } else {
        rowOfSymbols += separator + String(this[i]);
      }
    };

    return rowOfSymbols;
  };
}

module.exports = applyCustomJoin;
