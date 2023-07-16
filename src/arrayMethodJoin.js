'use strict';

/**
 * Implement method join
 */
function applyCustomJoin(arr, separator) {
  let result = '';
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    const currentElement = arr[i];

    if (i !== 0) {
      result += separator !== undefined ? separator : ',';
    }

    if (currentElement !== null && currentElement !== undefined) {
      result += currentElement;
    }
  }

  return result;
}

module.exports = applyCustomJoin;
