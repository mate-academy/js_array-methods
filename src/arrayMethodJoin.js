'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let myString = '';

    if (this.length < 1) {
      return myString;
    }

    for (let i = 0; i < this.length; i++) {
      // myString = myString + separator;

      if (this[i] === 'null') {
        myString = myString + 'null';
      } else if (this[i] === false && typeof (this[i]) === 'boolean') {
        myString = myString + 'false';
      } else if (this[i] !== null && this[i] !== undefined && this[i] !== '') {
        myString = myString + (+this[i]);
      }

      if (i !== this.length - 1) {
        myString = myString + separator;
      }
    }

    return myString;
  };
}

module.exports = applyCustomJoin;
