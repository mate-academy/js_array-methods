'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let linkedStringParts = '';
    let currentElement;

    for (let i = 0; i < this.length; i++) {
      currentElement = this[i] === null || this[i] === undefined ? '' : this[i];

      if (i === this.length - 1) {
        linkedStringParts += currentElement;
      } else {
        linkedStringParts += `${currentElement}${separator}`;
      }
    }

    return linkedStringParts;
  };
}

module.exports = applyCustomJoin;
