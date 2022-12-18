'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const array = this;
    let string = `${array[0]}`;

    if (array.length === 0) {
      return '';
    }

    if (array[0] === null) {
      string = '';
    }

    for (let i = 1; i < array.length; i++) {
      switch (true) {
        case array[i] === null:
        case array[i] === undefined:
          string += separator;
          break;

        case separator === null:
          string += 'null' + array[i];
          break;

        default:
          string += separator + array[i];
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
