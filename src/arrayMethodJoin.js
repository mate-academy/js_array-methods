'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let stringAfterJoining = '';
    let defaultSeparator;

    if (separator === undefined) {
      defaultSeparator = ',';
    } else {
      defaultSeparator = '' + separator;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        stringAfterJoining += defaultSeparator;
      } else if (i !== this.length - 1) {
        stringAfterJoining += this[i] + defaultSeparator;
      } else {
        stringAfterJoining += this[i];
      }
    }

    return stringAfterJoining;
  };
}

module.exports = applyCustomJoin;
