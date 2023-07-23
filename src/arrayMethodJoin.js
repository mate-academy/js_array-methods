'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let join2String = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        join2String += this[i];
      }

      if (i < (this.length - 1)) {
        join2String += separator;
      }
    };

    return join2String;
  };
}

module.exports = applyCustomJoin;
