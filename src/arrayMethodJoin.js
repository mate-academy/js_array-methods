'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(elemForParsing) {
    let array = this;
    let elem = elemForParsing === undefined ? ',' : elemForParsing;
    let string = '';
    if (array.length === 0) {
      return string;
    }
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'undefined' || array[i] === null) {
        array[i] = '';
        string += elem;
      }
      if (array[i] !== array[array.length - 1]) {
        string += ('' + array[i]) + elem;
      } else {
        string += array[i];
      }
    }
    return string;
  };
}

module.exports = applyCustomJoin;
