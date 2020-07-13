'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let joinString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        joinString += '';
      } else {
        joinString += this[i];
      }

      if (i !== this.length - 1) {
        if (separator || separator === null || separator === '') {
          joinString += separator;
        } else {
          joinString += ',';
        }
      }
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
