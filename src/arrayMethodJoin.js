'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length < 1) {
      return '';
    }

    let str = '';

    for (let i = 0; i < this.length; i += 1) {
      let item = this[i];

      if (item === undefined || item === null) {
        item = '';
      }

      if (i !== this.length - 1) {
        str += item;
        str += separator;
      } else {
        str += item;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
