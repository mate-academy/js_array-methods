'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    const joinMethod = [...this];

    for (let i = 0; i < joinMethod.length; i++) {
      if (joinMethod[i] === undefined || joinMethod[i] === null) {
        joinMethod[i] = '';
      }
      joinedString += joinMethod[i];

      if (i !== joinMethod.length - 1) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
