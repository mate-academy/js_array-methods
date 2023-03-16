'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separetedString = '';

    for (let item = 0; item < this.length; item++) {
      separetedString += this[item] === undefined || this[item] === null
        ? ''
        : this[item];

      if (item === this.length - 1) {
        continue;
      }
      separetedString += separator;
    }

    return separetedString;
  };
}

module.exports = applyCustomJoin;
