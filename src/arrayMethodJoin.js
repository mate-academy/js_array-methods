'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinString = '';
    let stringSeparator = '';

    separator === undefined
      ? stringSeparator = ','
      : stringSeparator = '' + separator;

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (element === null || element === undefined) {
        element = '';
      }

      if (i !== this.length - 1) {
        joinString += element + stringSeparator;
      } else {
        joinString += element;
      }
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
