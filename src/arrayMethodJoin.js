'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let answerStrig = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        answerStrig += this[i];
      } else {
        answerStrig += '';
      }

      if (i < this.length - 1) {
        answerStrig += separator;
      }
    }

    return answerStrig;
  };
}

module.exports = applyCustomJoin;
