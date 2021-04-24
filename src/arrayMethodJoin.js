'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    const joinedArr = [''];
    const length = this.length;

    const sep = typeof (separator) === 'object'
      ? String(separator)
      : separator;

    if (length < 1) {
      return '';
    }

    for (let i = 0; i < length; i++) {
      let element;

      switch (true) {
        case typeof (this[i]) === 'undefined':
          element = '';

          break;

        case typeof (this[i]) === 'object' && !this[i] === true:
          element = '';

          break;

        default:
          element = this[i];
      }
      joinedArr.push(joinedArr[i] + element + sep);
    }

    return sep
      ? joinedArr[length].slice(0, -sep.length)
      : joinedArr[length];
  };
}

module.exports = applyCustomJoin;
