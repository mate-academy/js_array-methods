'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    if (this.length === 1) {
      return String(this[0]);
    }

    let string = this[0] === null ? '' : String(this[0]);

    for (let i = 1; i < this.length; i++) {
      let el = this[i];

      if (el === null || el === undefined) {
        el = '';
      }
      string += `${String(separator)}${el}`;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
