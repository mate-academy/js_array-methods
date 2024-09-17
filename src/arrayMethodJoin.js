'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedElements = '';

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] === 'undefined' || this[i] === null) {
        this[i] = '';
      }

      joinedElements += `${this[i]}${separator}`;
    }

    return joinedElements.substring(0, joinedElements.lastIndexOf(separator));
  };
}

module.exports = applyCustomJoin;
