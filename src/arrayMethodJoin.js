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

    if (separator === '') {
      str = this.toString().replace(/,/g, '');
    } else {
      str = this.toString().replace(/,/g, separator);
    }

    return str;
  };
}

module.exports = applyCustomJoin;
