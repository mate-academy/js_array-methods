'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinResult = '';
    let newSeparator = separator;

    if (newSeparator === undefined) {
      newSeparator = ',';
    }

    for (const word of this) {
      switch (word) {
        case undefined:
        case null:
          break;

        default:
          joinResult += word;
      }

      if (word !== this[this.length - 1]) {
        joinResult += newSeparator;
      }
    }

    return joinResult;
  };
}

module.exports = applyCustomJoin;
