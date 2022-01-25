'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let modifiedSeparator = separator;
    let joinedElement = '';

    if (separator === null) {
      modifiedSeparator = null + '';
    }

    for (let i = 0; i < this.length; i++) {
      let item = this[i];

      if ([undefined, null].includes(item)) {
        item = '';
      }

      if (i !== this.length - 1) {
        joinedElement += item + modifiedSeparator;
      } else {
        joinedElement += item;
      }
    }

    return joinedElement;
  };
}

module.exports = applyCustomJoin;
