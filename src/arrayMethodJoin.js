'use strict';

/**
 * Implement method join
 */
function applyCustomJoin(arr, separator = ',') {
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    if (i !== 0) {
      result += separator;
    }

    if (currentElement != null) {
      result += currentElement;
    }
  }

  return result;
}
module.exports = applyCustomJoin;
