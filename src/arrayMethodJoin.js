'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = this[0] === null ? '' : `${this[0]}`;

    const separate = separator === null ? 'null' : separator;

    if (!this.length) {
      return '';
    } else if (this.length === 1) {
      return string;
    }

    for (let i = 1; i < this.length; i++) {
      let element = this[i];

      if (this[i] === null || this[i] === undefined) {
        element = '';
      }
      string += separate + element;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
