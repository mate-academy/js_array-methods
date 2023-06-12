'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let dublicateSeparator = separator;
    let joinedArray = '';

    switch (separator) {
      case undefined :
        dublicateSeparator = ',';
        break;

      case null :
        dublicateSeparator = 'null';
        break;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null
        && typeof this[i] !== 'undefined') {
        joinedArray += this[i];
      }

      if (i < this.length - 1) {
        joinedArray += dublicateSeparator;
      }
    }

    return joinedArray;
  };
}

module.exports = applyCustomJoin;
