'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let arrayJoin = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        arrayJoin += separator;
        continue;
      }

      arrayJoin += this[i];

      if (separator !== undefined && i !== this.length - 1) {
        arrayJoin += separator;
      }
    }

    return arrayJoin;
  };
}

module.exports = applyCustomJoin;
