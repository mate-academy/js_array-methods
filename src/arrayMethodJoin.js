'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let newString = '';
    let sepSign = '';
    let element = '';

    if (separator) {
      sepSign = separator;
    } else if (separator === undefined) {
      sepSign = ',';
    } else if (separator === null) {
      sepSign = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] || this[i] === 0) {
        element = this[i];
      } else if (this[i] === false) {
        element = false;
      } else if (isNaN(this[i]) && this[i] !== undefined) {
        element = NaN;
      } else if (this[i] === null) {
        element = '';
      } else if (this[i] === undefined) {
        element = '';
      } else if (this[i] === '') {
        element = '';
      }

      // if (isNaN(this[i]) && this[i] !== undefined) {
      //   element = NaN;
      // } else {
      //   switch (this[i]) {
      //     case '':
      //     case undefined:
      //     case null:
      //       element = '';
      //       break;
      //     case false:
      //       element = false;
      //       break;
      //     case true:
      //     case 0:
      //       element = this[i];
      //       break;
      //   }
      // }

      if (i === (this.length - 1)) {
        newString += element;
      } else {
        newString += element + sepSign;
      }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
