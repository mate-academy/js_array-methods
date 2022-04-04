'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinString = '';
    let splitter = separator;

    if (separator === undefined) {
      splitter = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinString += this[i];
      }

      if (i !== this.length - 1) {
        joinString += splitter;
      }
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
