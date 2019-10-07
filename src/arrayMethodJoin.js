'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinedString = '';
    let defaultSeparator;

    if (separator === undefined) {
      defaultSeparator = ',';
    } else {
      defaultSeparator = '' + separator;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        joinedString += defaultSeparator;
      } else if (i !== this.length - 1) {
        joinedString += this[i] + defaultSeparator;
      } else {
        joinedString += this[i];
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
