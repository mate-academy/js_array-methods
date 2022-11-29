'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const lastElementIndex = this.length - 1;
    let string = '';

    for (const element of this) {
      const elem = element !== null && element !== undefined
        ? element
        : '';

      string += this.indexOf(element) !== lastElementIndex
        ? elem + `${separator}`
        : elem;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
