'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let concatString = '';

    for (let i = 0; i < this.length; i++) {
      if ((this[i] !== null) && (typeof this[i] !== 'undefined')) {
        concatString += this[i];
      } else {
        concatString += '';
      }

      if (i < this.length - 1) {
        concatString += separator;
      }
    }

    return concatString;
  };
}

module.exports = applyCustomJoin;
