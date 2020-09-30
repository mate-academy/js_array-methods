'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joint = '';

    for (let i = 0; i < this.length - 1; i++) {
      if ((this[i] !== null) && (this[i] !== undefined)) {
        joint += this[i];
      }
      joint += separator;
    }

    if (this.length !== 0) {
      joint += this[this.length - 1];
    }

    return joint;
  };
}

module.exports = applyCustomJoin;
