'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length <= 0) {
      return '';
    }

    let universalSeparator = separator;
    let str = '';

    if (universalSeparator === null) {
      universalSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
    };

    for (let i = 0; i < this.length - 1; i++) {
      str += this[i] + universalSeparator;
    };

    str += this[this.length - 1];

    return str;
  };
}

module.exports = applyCustomJoin;
