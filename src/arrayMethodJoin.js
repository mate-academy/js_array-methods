'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (!this) {
      return '';
    }

    let string = '';
    const checkItem = item => (item === null || item === undefined) ? '' : item;

    for (let i = 0; i < this.length; i++) {
      if (i === 0) {
        string = `${checkItem(this[i])}`;
        continue;
      }

      string += `${separator
        !== undefined ? separator : ','}${checkItem(this[i])}`;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
