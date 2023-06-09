'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = '';

    for (let i = 0; i < this.length; i++) {
      const currentSeparator = i === this.length - 1 ? '' : separator;
      const currentItem = this[i] === null || this[i] === undefined
        ? ''
        : this[i];

      joinedStr += `${currentItem}${currentSeparator}`;
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
