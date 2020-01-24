'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const data = this;
    let newString = '';
    let itemSeparator = separator;

    if (itemSeparator === undefined) {
      itemSeparator = ',';
    }

    if (itemSeparator === null) {
      itemSeparator = 'null';
    }

    for (let i = 0; i < data.length; i += 1) {
      let item = data[i];

      if (item === null || item === undefined) {
        item = '';
      }

      i === data.length - 1 ? newString += item
        : newString += item + itemSeparator;
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
