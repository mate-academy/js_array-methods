'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const actualSeparator = separator === undefined ? ',' : separator;

    let result = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (i > 0) {
        result += actualSeparator;
      }

      if (element === null || element === undefined) {
        result += '';
      } else {
        result += element.toString();
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
