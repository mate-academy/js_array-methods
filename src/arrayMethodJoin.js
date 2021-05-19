'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    switch (this.length) {
      case 0:
        return '';

      case 1:
        return `${this[0]}`;

      default:
        for (let i = 0; i < this.length; i++) {
          const e = this[i] === undefined || this[i] === null ? '' : this[i];

          i === this.length - 1
            ? str += `${e}`
            : str += `${e}` + separator;
        }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
