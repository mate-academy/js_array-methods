'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (i !== this.length - 1) {
        const el = checkElement(this[i], separator);

        str += el;
      } else {
        const lastEl = lastElementCheck(this[i]);

        str += lastEl;
      }
    }

    return str;
  };
}

function checkElement(el, separator) {
  if (el === null || el === undefined) {
    return separator;
  } else {
    return `${el}${separator}`;
  }
}

function lastElementCheck(el) {
  if (el !== null && el !== undefined) {
    return el;
  } else {
    return '';
  }
}

module.exports = applyCustomJoin;
