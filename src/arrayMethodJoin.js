'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joinedArr = '';

    const calculatedSeparator = typeof (separator) === 'object'
      ? String(separator)
      : separator;

    for (let i = 0; i < this.length; i++) {
      let element;

      if (this[i] === undefined || this[i] === null) {
        element = '';
      } else {
        element = this[i];
      }

      joinedArr += element + calculatedSeparator;
    }

    return calculatedSeparator
      ? joinedArr.slice(0, -calculatedSeparator.length)
      : joinedArr;
  };
}

module.exports = applyCustomJoin;
