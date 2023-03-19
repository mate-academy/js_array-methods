'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringFromArray = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      const stringItem = this[i];

      stringFromArray += stringItem === undefined || stringItem === null
        ? '' : stringItem;

      if (i !== this.length - 1) {
        stringFromArray += String(separator);
      }
    }

    return stringFromArray;
  };
}

module.exports = applyCustomJoin;
