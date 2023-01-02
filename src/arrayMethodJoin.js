'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinString = '';
    let changeSeparator = separator;

    if (changeSeparator === null) {
      changeSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        if (i === this.length - 1) {
          joinString += '';
        } else {
          joinString += '' + changeSeparator;
        }
      } else if (i === this.length - 1) {
        joinString += this[i];
      } else {
        joinString += this[i] + changeSeparator;
      }
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
