'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let answer = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        answer += this[i];
      }

      if (i === this.length - 1) {
        break;
      }

      answer += separator;
    }

    return answer;
  };
}

module.exports = applyCustomJoin;
