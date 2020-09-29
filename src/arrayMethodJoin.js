'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joint = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if ((this[i] !== null) && (this[i] !== undefined)) {
        joint += this[i];
      }
      joint += separator;
    }
    joint += this[this.length - 1];

    return joint;
  };
}

module.exports = applyCustomJoin;
