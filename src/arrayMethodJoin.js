'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separ = separator;

    if (separator === null) {
      separ = 'null';
    }

    let str = '';

    for (const elem of this) {
      if (elem === null || elem === undefined) {
        str += separ;
      } else {
        str += elem + separ;
      }
    }

    const result = str.slice(0, str.lastIndexOf(separ));

    return result;
  };
}

module.exports = applyCustomJoin;
