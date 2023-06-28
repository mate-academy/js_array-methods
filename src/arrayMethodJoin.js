'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const finalSeparator = separator !== undefined ? separator : ',';

    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        result += finalSeparator;
      }

      if (this[i] === null || this[i] === undefined) {
        result += '';
      } else {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
