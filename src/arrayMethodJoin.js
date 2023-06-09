'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = this[0] === null ? '' : `${this[0]}`;

    const separate = separator === null ? 'null' : separator;

    if (!this.length) {
      return '';
    } else if (this.length === 1) {
      return result;
    }

    for (let i = 1; i < this.length; i++) {
      let element = this[i];

      if (this[i] === null || this[i] === undefined) {
        element = '';
      }
      result += separate + element;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
