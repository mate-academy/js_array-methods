'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinedList = '';
    const defaultSeparator = separator === undefined
      ? ','
      : separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      joinedList += this[i];

      if (i < this.length - 1) {
        joinedList += defaultSeparator;
      }
    }

    return joinedList;
  };
}

module.exports = applyCustomJoin;
