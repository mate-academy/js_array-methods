'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let joinString = '';

    for (let i = 0; i < this.length; i++) {
      if ((this[i] || this[i] === 0 || this[i] === false || isNaN(this[i]))
      && this[i] !== undefined) {
        joinString += this[i];
      } else {
        joinString += '';
      }

      if (i !== this.length - 1) {
        if (separator) {
          joinString += separator;
        } else if (separator === null) {
          joinString += null;
        } else if (separator === '') {
          joinString += '';
        } else {
          joinString += ',';
        }
      }
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
