'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let changedSeparator = separator;

    if (separator === undefined) {
      changedSeparator = ',';
    } else if (separator === null) {
      changedSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += '' + changedSeparator;
      } else {
        if (i !== (this.length - 1)) {
          result += this[i] + changedSeparator;
        } else {
          result += this[i];
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
