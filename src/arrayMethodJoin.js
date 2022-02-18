'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined && this[i] === this[this.length - 1]) {
        return `${result}`;
      }

      if (this[i] === this[this.length - 1]) {
        result += `${this[i]}` + '';
      } else if (this[i] === null || this[i] === undefined) {
        result += `` + separator;
      } else {
        result += `${this[i]}` + separator;
      }
    }

    return `${result}`;
  };
};

module.exports = applyCustomJoin;
