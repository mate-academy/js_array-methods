'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';
    let itemSeparator = separator;

    if (itemSeparator === undefined) {
      itemSeparator = ',';
    }

    if (itemSeparator === null) {
      itemSeparator = 'null';
    }

    for (let i = 0; i < this.length; i += 1) {
      let item = this[i];

      if (item === null || item === undefined) {
        item = '';
      }

      i === this.length - 1
        ? newString += item
        : newString += item + itemSeparator;
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
