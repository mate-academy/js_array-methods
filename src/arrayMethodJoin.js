'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let finalStrign = '';
    // we should create this variable for result after adding

    if (this.length === 0) {
      // 'this' means obj with which we use method (join2)
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      // iterate elements over the array

      if (this[i] !== null && this[i] !== undefined) {
        // array must have at least 1 element
        finalStrign += this[i];
        // take item [i] from array ( we call it due to 'this') to finalString
      }

      if (i < this.length - 1) {
        // after taking this[i] to finalString, we shot take separator too
        finalStrign += separator;
      }
    }

    return finalStrign;
    // return result with separators between items
  };
}

module.exports = applyCustomJoin;
