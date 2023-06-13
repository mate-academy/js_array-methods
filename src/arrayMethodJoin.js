'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      resultString += i === 0
        ? nextElement(this[i])
        : separator + nextElement(this[i]);
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
