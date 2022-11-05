'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    const sep = (separator === undefined) ? ',' : separator;
    const endIndx = this.length - 1;

    function filter(elem) {
      if ((elem === undefined) || (elem === null)) {
        return '';
      }

      return elem;
    }

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < endIndx; i++) {
      str += filter(this[i]);
      str += sep;
    }

    str += filter(this[endIndx]);

    return str;
  };
}

module.exports = applyCustomJoin;
