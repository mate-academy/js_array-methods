'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arr = [...this];

    let joiner = '';

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == null) {
        joiner += '' + separator;
        continue;
      }

      if (i !== arr.length - 1) {
        joiner += '' + arr[i] + '' + separator;
        continue;
      }

      joiner += '' + arr[i];
    }

    return joiner;
  };
}

module.exports = applyCustomJoin;
