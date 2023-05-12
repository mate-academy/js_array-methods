'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = '';
    const copyOfOriginal = [...this];

    for (let i = 0; i < copyOfOriginal.length; i++) {
      if (copyOfOriginal[i] !== undefined && copyOfOriginal[i] !== null) {
        joinedStr += String(copyOfOriginal[i]);
      };

      if (i !== copyOfOriginal.length - 1) {
        joinedStr += separator;
      };
    }

    return joinedStr;
  };
};

module.exports = applyCustomJoin;
