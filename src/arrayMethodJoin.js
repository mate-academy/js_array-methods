'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    if (this.length === 1) {
      return this.toString();
    }

    for (let i = 0; i < this.length; i++) {
      const cur = this[i] === null || this[i] === undefined ? '' : this[i];

      if (separator) {
        str += cur + separator;
      } else {
        if (separator === '') {
          str += cur;
        } else if (separator === null) {
          str += cur + 'null';
        } else {
          str += cur + ',';
        }
      }
    }

    if (separator !== '') {
      if (separator === null) {
        str = str.slice(0, -4);
      } else if (typeof separator === 'object') {
        str = str.slice(0, -15);
      } else {
        str = str.slice(0, -1);
      };
    }

    return str;
  };
}

module.exports = applyCustomJoin;
