'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let unitedString = '';

    for (let i = 0; i < this.length; i++) {
      const validation
      = this[i] === undefined
      || this[i] === null
      || this[i] === '';

      const addValue = validation ? '' : this[i];

      unitedString += i === this.length - 1
        ? addValue
        : addValue + String(separator);
    }

    return unitedString;
  };
}

module.exports = applyCustomJoin;
