'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    const items = this;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if ((item !== undefined) && (item !== null)) {
        str += item;
      }

      if (i !== items.length - 1) {
        str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
