'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = '';

    for (let element = 0; element < this.length; element++) {
      if ((this[element] !== null) && (this[element] !== undefined)) {
        joinedStr += this[element];
      }

      if (element !== (this.length - 1)) {
        joinedStr += separator;
      }
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
