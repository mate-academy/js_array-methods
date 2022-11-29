'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = '';
    let sep = separator;

    if (separator === null) {
      sep = 'null';
    }

    if (this.length === 0) {
      return '';
    }

    if (this.length === 1) {
      return `${this[0]}`;
    }

    function value(val) {
      if ((val === undefined) || (val === null)) {
        return '';
      }

      return val;
    }

    for (let i = 0; i < this.length - 1; i++) {
      joinedStr += value(this[i]) + sep;
    }

    return joinedStr + value(this[this.length - 1]);
  };
}

module.exports = applyCustomJoin;
