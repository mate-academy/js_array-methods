'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let createString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined) {
        this[i] = '';
      }

      if (this[i] === null) {
        this[i] = '';
      }
      createString += this[i];

      if (i !== this.length - 1) {
        createString += separator;
      }
    }

    return createString;
  };
}

module.exports = applyCustomJoin;
