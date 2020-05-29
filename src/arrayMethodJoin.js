'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (!this) {
      return '';
    }

    const getItem = item => (item === null || item === undefined) ? '' : item;

    let string = `${getItem(this[0])}`;

    for (let i = 1; i < this.length; i++) {
      string += `${separator}${getItem(this[i])}`;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
