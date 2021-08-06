'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let phraseOfArray = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        phraseOfArray += separator;
        continue;
      }

      phraseOfArray += this[i];

      if (i !== this.length - 1) {
        phraseOfArray += separator;
      }
    }

    return phraseOfArray;
  };
}

module.exports = applyCustomJoin;
