'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const arr = this;
    let sepCopy = separator;
    let strResult = '';

    if (sepCopy === undefined) {
      sepCopy = ',';
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== undefined && arr[i] !== null) {
        strResult += arr[i];
      }

      if (i !== this.length - 1) {
        strResult += sepCopy;
      }
    }

    return strResult;
  };
}

module.exports = applyCustomJoin;
