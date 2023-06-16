'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function (separator = ',') {
    // write code here
    let string = '';

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (this[i] === null || this[i] === undefined) {
        element = '';
      }

      if (this.length - i === 1) {
        string += element;
      } else {
        string += element + `${separator}`;
      }
    }


    return string;
  };
}

module.exports = applyCustomJoin;
