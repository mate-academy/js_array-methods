'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';

    if (this[0] === null) {
      newString += '';
    } else {
      newString += this[0];
    };

    if (this.length === 0) {
      return '';
    };

    for (let i = 1; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        if (separator === null) {
          newString += 'null';
        } else {
          newString += separator;
        };
      } else {
        if (separator === null) {
          newString += ('null' + this[i]);
        } else {
          newString += (separator + this[i]);
        };
      }
    };

    return newString;
  };
}

module.exports = applyCustomJoin;
