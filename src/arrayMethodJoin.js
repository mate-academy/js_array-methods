'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length) {
      let joinedString = '';

      for (let element = 0; element < this.length; element++) {
        if (this[element] == null) {
          this[element] = '';
        }

        if (element + 1 === this.length) {
          joinedString += this[element];

          return joinedString;
        }

        joinedString += this[element] + `${separator}`;
      }
    }

    return '';
  };
}

module.exports = applyCustomJoin;
