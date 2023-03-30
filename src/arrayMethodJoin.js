'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joiner = '';

    for (let i = 0; i < this.length; i++) {
      if ((this[i] === undefined) || (this[i] === null)) {
        if (this[i] === this[this.length - 1]) {
          break;
        }
        joiner += separator;
        continue;
      }

      if (this[i] === this[this.length - 1]) {
        joiner += this[i];
        break;
      }
      joiner += this[i] + separator;
    }

    return joiner;
  };
}

module.exports = applyCustomJoin;
