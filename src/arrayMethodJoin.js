'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    let separatorToJoin = separator;
    const arrLength = this.length;

    if (separator === null) {
      separatorToJoin = 'null';
    }

    for (let i = 0; i < arrLength; i++) {
      const currentElement = this[i];

      if (currentElement !== undefined
          && currentElement !== null) {
        if (i !== arrLength - 1) {
          joinedString += currentElement + separatorToJoin;
        } else {
          joinedString += currentElement;
        }
      } else if ((currentElement === undefined
        || currentElement === null)
        && i !== arrLength - 1) {
        joinedString += separatorToJoin;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
