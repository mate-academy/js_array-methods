'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let self = separator;
    if (this.length === 0) {
      return '';
    }
    if (this.length === 1) {
      return '' + this;
    }
    if (self == null) {
      self = 'null';
    }
    let res = '';
    const last = this[this.length - 1];
    for (let i = 0; i < this.length - 1; i++) {
      if ((this[i] === null) || (this[i] === undefined)) {
        this[i] = '';
      }
      res += this[i] + self;
    }
    return res + last;
  };
}

module.exports = applyCustomJoin;
