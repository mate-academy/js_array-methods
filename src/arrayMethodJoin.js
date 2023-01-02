'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinedString = '';
    let thisSeparator = separator;

    if (separator === undefined) {
      thisSeparator = ',';
    }

    for (let i = 0; i <= this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        if (i !== this.length - 1) {
          joinedString += thisSeparator;
        }
      } else if (i === this.length - 1) {
        joinedString += this[i];
      } else {
        joinedString += this[i];
        joinedString += thisSeparator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
