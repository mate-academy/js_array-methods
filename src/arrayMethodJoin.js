'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';
    const lastElement = this.length - 1;

    for (const el of this) {
      if (el === undefined || el === null) {
        newString += '';
      } else {
        newString += el;
      };

      if (el !== this[lastElement]) {
        newString += separator;
      }
    };

    return newString;
  };
}

module.exports = applyCustomJoin;
