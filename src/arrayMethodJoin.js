'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinedString = '';
    let separatorValue = separator;

    if (typeof separator === 'undefined') {
      separatorValue = ',';
    }

    if (separator === null) {
      separatorValue = 'null';
    }

    if (this.length > 0) {
      for (let i = 0; i < this.length - 1; i++) {
        if (this[i] === null || this[i] === undefined) {
          joinedString += separatorValue;
        } else {
          joinedString += this[i] + separatorValue;
        }
      }
      joinedString += this[this.length - 1];
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
