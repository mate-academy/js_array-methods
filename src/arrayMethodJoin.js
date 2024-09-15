'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const items = this;
    let str = '';

    for (let i = 0; i < items.length; i++) {
      const item = (items[i] === null || items[i] === undefined) ? ''
        : items[i];
      const separatorInner = separator !== null ? separator : 'null';

      str += (i === items.length - 1) ? item : item + separatorInner;
    };

    return str;
  };
}

module.exports = applyCustomJoin;
