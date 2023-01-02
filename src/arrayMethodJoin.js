'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinString = '';
    let joinSeparator = separator;

    if (joinSeparator === null) {
      joinSeparator = 'null';
    }

    if (joinSeparator === undefined) {
      joinSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      let elem = this[i];

      if (typeof this[i] === 'undefined' || typeof this[i] === 'object') {
        elem = '';
      }

      if (i === this.length - 1) {
        joinString += elem;
      } else {
        joinString += elem + joinSeparator;
      }
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
