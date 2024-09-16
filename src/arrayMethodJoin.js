'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        joinString += '';
      } else {
        joinString += this[i];
      }

      if (i === (this.length - 1)) {
        joinString += '';
      } else if (separator === undefined) {
        joinString += ',';
      } else {
        joinString += separator;
      }
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
