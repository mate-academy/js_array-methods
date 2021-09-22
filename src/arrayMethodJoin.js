'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let el = 0; el < this.length; el++) {
      if (this[el] === undefined || this[el] === null) {
        this[el] = '';
      } else {
        joinedString += this[el];
      }

      if (el !== this.length - 1) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
