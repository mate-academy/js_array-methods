'use strict';

/**
 * Implement method join
 */

// - There is kinda an easy solution for
// |-- this task but with some weird tests
// |-- like null could be a separator
// |-- but not an undefined, or NaN. XD
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let symbol = separator;

    if (separator === null) {
      symbol = 'null';
    } else if (separator === '') {
      symbol = '';
    }

    // Main loop:
    for (let i = 0; i < this.length; i++) {
      let item = this[i];

      if (item === null || item === undefined) {
        item = '';
      }

      if (i !== this.length - 1) {
        result += item + symbol;
      } else {
        result += item;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
