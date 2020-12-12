'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str;
    let itemToPaste;

    if (this[0] !== null && this[0] !== undefined) {
      str = `${this[0]}`;
    } else {
      str = '';
    }

    if (this.length === 0) {
      return '';
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        itemToPaste = this[i];
      } else {
        itemToPaste = '';
      }

      if (separator !== undefined) {
        str = str + separator + itemToPaste;
      } else {
        str = str + ',' + itemToPaste;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
