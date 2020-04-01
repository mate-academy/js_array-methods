'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const items = this;
    let str = '';
    let separatorStr = String(separator);

    if (separator === undefined) {
      separatorStr = ',';
    }

    for (let i = 0; i < items.length; i++) {
      if (items[i] === null || items[i] === undefined) {
        items[i] = '';
      }

      if (i === items.length - 1) {
        separatorStr = '';
      }
      str += items[i] + separatorStr;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
