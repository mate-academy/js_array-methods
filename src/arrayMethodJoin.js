'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    const divide = separator;

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (element !== undefined && element !== null) {
        joinedString += `${element}`;
      }

      if (i !== this.length - 1) {
        joinedString += `${divide}`;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
