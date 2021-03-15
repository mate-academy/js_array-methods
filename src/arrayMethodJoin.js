'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (!this.length) {
      return '';
    }

    if (this.length === 1) {
      return String(this);
    }

    let res = String(this[0]);

    if ((this[0] === null) || (this[0] === undefined)) {
      res = '';
    }

    for (let i = 1; i < this.length; i++) {
      let a = String(this[i]);

      if ((a === 'null') || (a === 'undefined')) {
        a = '';
      }
      res += String(separator) + a;
    }

    return res;
  };
}

module.exports = applyCustomJoin;
