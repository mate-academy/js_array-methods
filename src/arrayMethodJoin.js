'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    let joined = '';
    let mySeparator = separator;

    if (separator === undefined) {
      mySeparator = ',';
    }

    for (let i = 0; i < this.length - 1; i++) {
      const element = this[i];

      if (element === null || element === undefined) {
        joined += mySeparator;
      } else {
        joined += `${element}${mySeparator}`;
      }
    }

    joined += this[this.length - 1];

    return joined;
  };
}

module.exports = applyCustomJoin;
