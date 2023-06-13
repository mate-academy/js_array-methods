'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';
    let skipSeparator = true;

    for (const item of this) {
      let newPart = '';

      if (skipSeparator) {
        newPart += nextElement(item);
        skipSeparator = false;
      } else {
        newPart += separator + nextElement(item);
      }

      resultString += newPart;
    }

    return resultString;
  };
}

function nextElement(item) {
  let resultItem = item;

  if ([null, undefined].includes(resultItem)) {
    resultItem = '';
  }

  return resultItem + '';
}

module.exports = applyCustomJoin;
