'use strict';

/**
 * Implement method join
 */

const isIgnoredEl = (el) => [null, undefined].includes(el);

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const INDEX_OF_LAST_ELEMENT = this.length - 1;
    // if empty array return empty string
    const lastElement = this[INDEX_OF_LAST_ELEMENT] || '';

    let concatedString = '';

    for (let curIndex = 0; curIndex < this.length; curIndex++) {
      const curElement = this[curIndex];

      if (isIgnoredEl(curElement) && curIndex !== INDEX_OF_LAST_ELEMENT) {
        concatedString += ',';
        continue;
      }

      if (curIndex !== INDEX_OF_LAST_ELEMENT) {
        concatedString += curElement + String(separator);
      }
    }

    return concatedString + lastElement;
  };
}

module.exports = applyCustomJoin;
