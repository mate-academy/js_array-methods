'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let join2String = '';

    if (this.length === 1) {
      return `${this[0]}`;
    }

    if (this.length > 1) {
      join2String = `${this[0]}`;

      if (this[0] === null || this[0] === undefined) {
        join2String = '';
      }
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        join2String = `${join2String + separator}`;
        continue;
      }
      join2String = `${join2String + separator + this[i]}`;
    };

    return join2String;
  };
}

module.exports = applyCustomJoin;
