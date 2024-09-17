'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let outputLine = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        outputLine += separator;
        continue;
      }

      outputLine += this[i];
      if (i < this.length - 1) {
        outputLine += separator;
      }
    }

    return outputLine;
  };
}

module.exports = applyCustomJoin;
