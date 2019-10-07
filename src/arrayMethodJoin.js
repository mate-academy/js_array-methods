'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    const checkedSeparator = separatorCheck(separator);
    let string = '';
    for (let i = 0; i < this.length; i++) {
      const checkedElement = arrayElementCheck(this[i]);
      if (i < this.length - 1) {
        string += checkedElement + checkedSeparator;
      } else {
        string += checkedElement;
      }
    }
    return string;
  };
}

function separatorCheck(separator) {
  return separator == null ? 'null' : separator;
}
function arrayElementCheck(element) {
  return element == null || element === undefined ? '' : element;
}

module.exports = applyCustomJoin;
