'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (const element of this) {
      const elem = element !== null && element !== undefined
        ? element
        : '';

      string += this.indexOf(element) !== this.length - 1
        ? elem + `${separator}`
        : elem;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
