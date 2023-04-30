'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let outString = '';

    for (let i = 0; i < this.length; i++) {
      switch (this[i]) {
        case undefined:
          outString += '';
          break;
        case null:
          outString += '';
          break;
        default:
          outString += this[i];
          break;
      }

      if (i !== this.length - 1) {
        outString += separator;
      }
    }

    return outString;
  };
}

module.exports = applyCustomJoin;
