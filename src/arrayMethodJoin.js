'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const items = this;
    let str = '';

    for (let i = 0; i < items.length; i++) {
      let item = items[i];

      if (items[i] === null || items[i] === undefined) {
        item = '';
      } else {
        item += '';
      }

      if (i !== 0) {
        str += separator + item;
      } else {
        str += item;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
