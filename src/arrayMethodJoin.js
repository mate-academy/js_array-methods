'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedLine = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (i > 0) {
        joinedLine += separator;
      }

      if (element !== null && element !== undefined) {
        joinedLine += String(element);
      }
    }

    return joinedLine;
  };
}

module.exports = applyCustomJoin;
