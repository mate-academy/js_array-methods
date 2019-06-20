'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let answer = '';
    let correctValue = separator;

    for(let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        answer += correctValue;
      } else if (i !== this.length - 1) {
        answer += this[i] + '' + correctValue;
      } else {
        answer += this[i];
      }
    }
    return answer;
  };
}

module.exports = applyCustomJoin;
