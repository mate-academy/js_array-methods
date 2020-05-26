'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (!this) {
      return '';
    }

    let str = '';
    const checkItem = item => (item === null || item === undefined) ? '' : item;

    for (let i = 0; i < this.length; i++) {
      if (i === 0) {
        str = `${checkItem(this[i])}`;
        continue;
      }

      str += `${separator
        !== undefined ? separator : ','}${checkItem(this[i])}`;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
