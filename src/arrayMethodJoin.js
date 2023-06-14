'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      str += String(this[i]) + (i !== this.length - 1 ? separator : '');
    }

    return str;
  };
}

module.exports = applyCustomJoin;
