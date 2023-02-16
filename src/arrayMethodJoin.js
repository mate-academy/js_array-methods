'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let separators = separator;

    if (this.length === 0) {
      return '';
    };

    if (separators === null) {
      separators = 'null';
    };

    if (this[0] === null) {
      this[0] = '';
    }

    str += this[0];

    for (let i = 1; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      };

      str += separators + this[i];
    };

    return str;
  };
};

module.exports = applyCustomJoin;
