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

    this.forEach((element, index) => {
      let elementToAdd = element;

      if (elementToAdd === undefined || elementToAdd === null) {
        elementToAdd = '';
      }

      string += elementToAdd;

      if (index !== this.length - 1) {
        string += separatorToAdd;
      }
    });

    return string;
  };
}

module.exports = applyCustomJoin;
