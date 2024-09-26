'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    let separatorToAdd = separator;

    if (separator === null) {
      separatorToAdd = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      let elementToAdd = this[i];

      if (elementToAdd === undefined || elementToAdd === null) {
        elementToAdd = '';
      }

      string += elementToAdd;

      if (i !== this.length - 1) {
        string += separatorToAdd;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
