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

    for (let i = 0; i < this.length; i++) {
      if ([null, undefined].includes(this[i])) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        joinedString += this[i].toString();
        break;
      }

      joinedString += this[i].toString() + separator;
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
