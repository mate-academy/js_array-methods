'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
      if ((this[i] === null) || (this[i] === undefined)) {
        newArray[i] = '';
      } else {
        newArray[i] = this[i];
      }
    }

    let result = '';

    if (this.length === 0) {
      return result;
    }

    switch (separator) {
      case '': {
        for (let i = 0; i < newArray.length; i++) {
          result += newArray[i];
        }
        break;
      }

      default: {
        result += newArray[0];

        for (let i = 1; i < newArray.length; i++) {
          result = result + separator + newArray[i];
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
