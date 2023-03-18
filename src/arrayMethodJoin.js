'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        joinedString += '';
      } else {
        joinedString += this[i];
      }

      if (i !== this.length - 1) {
        joinedString += String(separator);
      }
    }

    return joinedString;
  };
}

const source = [0, 1, 2, 3];

applyCustomJoin();

source.join2(null);

module.exports = applyCustomJoin;
