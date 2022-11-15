'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i += 1) {
      let toAdd = this[i];

      if (toAdd === null || toAdd === undefined) {
        toAdd = '';
      }

      if (i === 0) {
        result += String(toAdd);
      } else {
        result += separator + String(toAdd);
      }
    };

    return result;
  };
};

module.exports = applyCustomJoin;
