'use strict';

/**
 * Implement method join
 */

const isNotIgnoredEl = (el) => ![null, undefined].includes(el);

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const indexOfLastElement = this.length - 1;

    let concatedString = '';

    for (let curIndex = 0; curIndex < this.length; curIndex++) {
      const curElement = this[curIndex];

      if (isNotIgnoredEl(curElement)) {
        concatedString += curElement;
      }

      if (curIndex !== indexOfLastElement) {
        concatedString += separator;
      }
    }

    return concatedString;
  };
}

module.exports = applyCustomJoin;
