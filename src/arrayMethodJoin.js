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

    function checkValue(value) {
      if ((value === undefined) || (value === null)) {
        return '';
      }

      return value;
    }

    for (let i = 0; i < this.length - 1; i++) {
      joinedStr += checkValue(this[i]) + sep;
    }

    return joinedStr + checkValue(this[this.length - 1]);
  };
}

module.exports = applyCustomJoin;
