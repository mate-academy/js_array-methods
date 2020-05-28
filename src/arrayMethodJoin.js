'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    let checkedElement;

    for (let i = 0; i < this.length; i++) {
      checkedElement = this[i];

      if (checkedElement === null || checkedElement === undefined) {
        checkedElement = '';
      }

      joinedString += (
        i > 0
          ? `${separator}${checkedElement}`
          : `${checkedElement}`
      );
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
