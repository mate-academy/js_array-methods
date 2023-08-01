'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let arrayJoinResult = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] != null && this[i] !== 'undefined') {
        arrayJoinResult += this[i];
      }

      if (i !== this.length - 1 && (separator || separator == null)) {
        arrayJoinResult += separator;
      }
    }

    return arrayJoinResult;
  };
}

module.exports = applyCustomJoin;
