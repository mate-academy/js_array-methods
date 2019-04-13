'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(token = ',') {
    let str = '';
    const element = String(token);
    for (let i = 0; i < this.length; i++) {
      if (
        this[i] === null
        || this[i] === undefined // eslint-disable-line
      ) {
        str += element;
      } else if (i === this.length - 1) {
        str += this[i];
      } else {
        str += this[i] + element;
      }
    }
    return str;
  };
}

module.exports = applyCustomJoin;
