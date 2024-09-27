'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stingWithJoin = '';

    for (let i = 0; i < this.length; i++) {
      const character = this[i];

      if (character !== undefined && character !== null) {
        stingWithJoin += character;
      }

      if (this.length - 1 > i) {
        stingWithJoin += separator;
      }
    }

    return stingWithJoin;
  };
}

module.exports = applyCustomJoin;
