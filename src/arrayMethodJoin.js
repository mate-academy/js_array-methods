'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';
    let skipSeparator = true;

    for (const item of this) {
      resultString += skipSeparator
        ? nextElement(item)
        : separator + nextElement(item);

      skipSeparator = false;
    }

    return resultString;
  };
}

function nextElement(item) {
  let resultItem = item;

  if (resultItem === null || resultItem === undefined) {
    resultItem = '';
  }

  return resultItem + '';
}

module.exports = applyCustomJoin;
