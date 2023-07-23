'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(sep = ',') {
    const separator = String(sep);
    let joinString = '';

    for (let i = 0; i < this.length; i++) {
      joinString += separator + (this[i] === null || this[i] === undefined
        ? '' : this[i]);
    }

    const result = joinString.substring(separator.length);

    return result;
  };
}

module.exports = applyCustomJoin;
