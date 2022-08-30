'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let combinedString = '';
    let separateString;

    switch (separator) {
      case undefined:
        separateString = ',';
        break;
      case null:
        separateString = 'null';
        break;
      default:
        separateString = separator.toString();
    }

    for (const element of this) {
      if (element === null || element === undefined) {
        combinedString += separateString;
      } else {
        combinedString += element + separateString;
      }
    }

    return combinedString
      .substring(0, combinedString.length - separateString.length);
  };
}

module.exports = applyCustomJoin;
