'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = String(this[0]);

    if (this[0] === null || this[0] === undefined) {
      result = '';
    }

    for (let i = 1; i < this.length; i += 1) {
      let toAdd = this[i];

      if (toAdd === null || toAdd === undefined) {
        toAdd = '';
      }
      result += separator + String(toAdd);
    };

    return result;
  };
};

module.exports = applyCustomJoin;
