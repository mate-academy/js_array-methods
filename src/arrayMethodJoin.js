'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const spr = `${separator}`;
    let result = '';

    for (let i = 0; i < this.length; i++) {
      let e = this[i];

      if (e === null || e === undefined) {
        e = '';
      }

      result += spr + e;
    }

    return result.slice(spr.length);
  };
}

module.exports = applyCustomJoin;
