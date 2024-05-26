'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length) {
      let joinedString = '';

      for (let i = 0; i < this.length; i++) {
        let buff = this[i];

        if (this[i] == null) {
          buff = '';
        }

        if (i === this.length - 1) {
          joinedString += buff;

          return joinedString;
        }

        joinedString += buff + `${separator}`;
      }
    }

    return '';
  };
}

module.exports = applyCustomJoin;
