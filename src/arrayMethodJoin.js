'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let step;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        step = '';
      } else {
        step = this[i];
      }

      if (i === this.length - 1) {
        result += `${step}`;
      } else {
        result += `${step}` + `${separator}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
