'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      let itemContent = this[i];

      if (this[i] === null || this[i] === undefined) {
        itemContent = '';
      }

      if (i === 0) {
        string += itemContent;
        continue;
      }

      string += `${separator}` + itemContent;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
