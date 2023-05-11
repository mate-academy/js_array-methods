'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const joined = [...this];
    let joinedSring = '';

    for (let i = 0; i < joined.length; i++) {
      if (joined[i] === undefined || joined[i] === null) {
        joined[i] = '';
      }
      joinedSring += String(joined[i]) + separator;
    }

    switch (separator) {
      case '':
        return joinedSring.slice(0, joinedSring.length);

      default:
        return joinedSring.slice(0, joinedSring.lastIndexOf(separator));
    }
  };
};

module.exports = applyCustomJoin;
