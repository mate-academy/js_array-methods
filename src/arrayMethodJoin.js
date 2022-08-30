'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let text = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        text += this[i];

        break;
      }

      text += `${this[i]}${separator}`;
    }

    return text;
  };
}

module.exports = applyCustomJoin;
