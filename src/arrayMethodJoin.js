'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    const s = separator === undefined ? ',' : '' + separator;

    for (const elem of this) {
      let add = elem;

      if (elem === null || elem === undefined) {
        add = '';
      }

      str += add + s;
    }

    return str.substr(0, str.length - s.length);
  };
}

module.exports = applyCustomJoin;
