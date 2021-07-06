'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let joinedString = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null
        || this[i] === undefined) {
        joinedString += '' + separator;
      } else {
        joinedString += this[i].toString() + separator;
      }
    };

    return joinedString + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
