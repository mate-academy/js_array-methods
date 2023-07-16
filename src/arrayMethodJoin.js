'use strict';

/**
 * Implement method join
 */
function applyCustomJoin(arr, separator) {
  let result = '';

  if (arr !== undefined && arr.length > 0) {
    result += arr[0];
  }

  for (let i = 1; i < arr.length; i++) {
    const currentElement = arr[i];

    result += separator !== undefined ? separator : ',';

    if (currentElement !== null && currentElement !== undefined) {
      result += currentElement;
    }
  }

  return result;
}

module.exports = applyCustomJoin;
