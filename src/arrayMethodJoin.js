'use strict';

/**
 * Implement method join
 */

const isNotIgnoredEl = (el) => ![null, undefined].includes(el);

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const currentArray = this;
    const INDEX_OF_LAST_ELEMENT = currentArray.length - 1;

    let concatedString = '';

    for (let curIndex = 0; curIndex < currentArray.length; curIndex++) {
      const curElement = currentArray[curIndex];

      if (isNotIgnoredEl(curElement)) {
        concatedString += curElement;
      }

      if (curIndex !== INDEX_OF_LAST_ELEMENT) {
        concatedString += separator;
      }
    }

    return concatedString;
  };
}

module.exports = applyCustomJoin;
