'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (!this.length) {
      return '';
    }

    let res = isEmpty(this[0]);

    for (let i = 1; i < this.length; i++) {
      res += separator + '' + isEmpty(this[i]);
    }

    return res;

    function isEmpty(item) {
      return item === null || item === undefined ? '' : item + '';
    }
  };
}

module.exports = applyCustomJoin;
