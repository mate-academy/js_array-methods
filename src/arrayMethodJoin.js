'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let customJoin = '';

    if (this.length === 0) {
      return '';
    }

    if (this[0] === undefined || this[0] === null) {
      customJoin += '';
    } else {
      customJoin += this[0];
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        customJoin += String(separator);
      } else {
        customJoin += String(separator) + String(this[i]);
      }
    }

    return customJoin;
  };
}

module.exports = applyCustomJoin;
