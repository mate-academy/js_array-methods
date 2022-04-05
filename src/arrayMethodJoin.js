'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinResult = '';
    const dataLength = this.length;

    for (let i = 0; i < dataLength; i++) {
      const char = this[i];

      if (char !== undefined && char !== null) {
        joinResult += char;
      }

      if (i !== dataLength - 1) {
        joinResult += `${separator}`;
      }
    }

    return joinResult;
  };
}

module.exports = applyCustomJoin;
