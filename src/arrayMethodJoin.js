'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    } else if (this.length === 1) {
      return String(this[0]);
    }

    let result;
    const separatorToString = String(separator);

    if (this[0] === undefined || this[0] === null) {
      result = '';
    } else {
      result = this[0];
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        result += separatorToString;
        continue;
      }
      result += separatorToString + String(this[i]);
    }

    return result;
  };
}

module.exports = applyCustomJoin;
