'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joined = '';
    let separating = separator;

    separator === undefined ? separating = ',' : separating += '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null
        || this[i] === undefined
      ) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        joined += this[i];
      } else {
        joined += this[i] + separating;
      };
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
