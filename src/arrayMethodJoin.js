'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    if (this.length === 0) {
      return '';
    }

    if (separator === null) {
      // eslint-disable-next-line no-param-reassign
      separator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        str += this[i];
      }

      if (i !== this.length - 1) {
        str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
