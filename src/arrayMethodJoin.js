'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joinedArr = '';
    const length = this.length;

    const sep = typeof (separator) === 'object'
      ? String(separator)
      : separator;

    for (let i = 0; i < length; i++) {
      let element;

      if (this[i] === undefined || this[i] === null) {
        element = '';
      } else {
        element = this[i];
      }

      joinedArr += element + sep;
    }

    return sep
      ? joinedArr.slice(0, -sep.length)
      : joinedArr;
  };
}

module.exports = applyCustomJoin;
