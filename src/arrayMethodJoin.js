'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      joinedString += this[i] !== undefined && this[i] !== null
        ? this[i]
        : '';

      joinedString += separator;
    }

    joinedString = joinedString
      .slice(0, joinedString.length - ('' + separator).length);

    return joinedString;
  };
}

module.exports = applyCustomJoin;
