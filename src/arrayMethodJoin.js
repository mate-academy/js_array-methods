'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';
    const lastItem = this[this.length - 1]; // last item of array

    for (let i = 0; i < this.length; i++) {
      // if current item is not equal to the values
      if ((this[i] !== undefined) && (this[i] !== null)) {
        // add this item to the string
        newString += this[i];
      }

      // if current item is not last in the array
      if (this[i] !== lastItem) {
        // add separator to the string
        newString += separator;
      }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
