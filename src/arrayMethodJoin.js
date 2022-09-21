'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    const arr = this.map(e => e === null || e === undefined ? '' : e);

    // eslint-disable-next-line no-var
    var res = '';

    for (let i = 0; i < arr.length - 1; i++) {
      res += arr[i];
      res += separator;
    }

    res += arr[arr.length - 1];

    return res;
  };
}

module.exports = applyCustomJoin;
