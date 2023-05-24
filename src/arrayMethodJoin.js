'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let modifiedSeparator = separator;

    if (separator === null) {
      modifiedSeparator = 'null';
    }

    const unsupportedTypes = [undefined, null];

    for (let i = 0; i < this.length; i++) {
      const currentItem = unsupportedTypes.includes(this[i]) ? '' : this[i];

      if (i === this.length - 1) {
        result += currentItem;
        continue;
      }

      result += currentItem + modifiedSeparator;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
