'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newSeparator = separator;
    const newArray = [];
    let string = '';

    if (!separator) {
      newSeparator = `${separator}`;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        newArray.push('');
      } else {
        newArray.push(this[i]);
      }
    }

    for (let i = 0; i < newArray.length; i++) {
      if (i === newArray.length - 1) {
        string += newArray[i];
      } else {
        string += newArray[i] + newSeparator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
