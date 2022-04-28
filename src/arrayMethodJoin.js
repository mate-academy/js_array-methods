'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedElements = '';
    const thisLength = this.length;

    for (let i = 0; i < thisLength; i++) {
      if (typeof this[i] === 'undefined' || this[i] === null) {
        this[i] = '';
      }

      joinedElements += `${this[i]}${separator}`;
    }

    return joinedElements.substring(0, joinedElements.lastIndexOf(separator));
  };
}

module.exports = applyCustomJoin;
