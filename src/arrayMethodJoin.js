'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let text = '';

    if (this.length === 0) {
      return text;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        text += this[i];

        return text;
      }

      text += `${this[i]}${separator}`;
    }
  };
}

module.exports = applyCustomJoin;
