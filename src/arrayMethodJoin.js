'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const spr = `${separator}`;
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      let e = this[i];

      if (e === null || e === undefined) {
        e = '';
      }

      joinedString += spr + e;
    }

    return joinedString.slice(spr.length);
  };
}

module.exports = applyCustomJoin;
