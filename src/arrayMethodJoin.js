'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = String(this[0]);
    let separatorVariable = separator;

    if (this[0] === undefined || this[0] === null) {
      result = '';
    }

    if (this.length === 0) {
      result = '';

      return result;
    }

    if (separator === undefined) {
      separatorVariable = ',';
    }

    const thisCopy = [...this];

    for (let i = 1; i < this.length; i++) {
      thisCopy[this.indexOf(undefined, i)] = '';
      thisCopy[this.indexOf(null, i)] = '';

      result += String(separatorVariable) + (thisCopy[i]);
    }

    return result;
  };
}

module.exports = applyCustomJoin;
