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

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      };
    };

    if (separators === null) {
      separators = 'null';
    }

    str = this[0] + '';

    if (separators) {
      for (let i = 1; i < this.length; i++) {
        if (this[i] || isNaN(this[i]) || this[i] === 0) {
          str += separators + this[i];
        } else {
          str += separators;
        };
      }
    } else {
      for (let i = 1; i < this.length; i++) {
        if (this[i] || isNaN(this[i]) || this[1] === 0) {
          str += this[i];
        }
      };
    }

    return str;
  };
};

module.exports = applyCustomJoin;
