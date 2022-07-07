'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    this.forEach((element, index) => {
      let elementToAdd = element;
      let separatorToAdd = separator;

      if (separator === null) {
        separatorToAdd = 'null';
      }

      if (elementToAdd === undefined || elementToAdd === null) {
        elementToAdd = '';
      }

      if (index === this.length - 1) {
        string += elementToAdd;
      } else {
        string += elementToAdd + separatorToAdd;
      }
    });

    return string;
  };
}

module.exports = applyCustomJoin;
