'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let arrayJoin = '';

    for (const element of this) {
      if (element === undefined || element === null) {
        arrayJoin += separator;
        continue;
      }

      arrayJoin += element;

      if (separator !== undefined && element !== this[this.length - 1]) {
        arrayJoin += separator;
      }
    }

    return arrayJoin;
  };
}

module.exports = applyCustomJoin;
