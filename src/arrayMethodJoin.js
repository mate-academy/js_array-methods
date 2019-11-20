'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    let elementToJoin;

    for (let i = 0; i < this.length; i++) {
      (this[i] === null || this[i] === undefined)
        ? elementToJoin = ''
        : elementToJoin = this[i];

      (i === this.length - 1)
        ? joinedString = joinedString.concat(elementToJoin)
        : joinedString = joinedString.concat(elementToJoin, separator);
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
