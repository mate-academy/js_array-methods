'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';
    let joiningElement;
    let separation = separator;

    if (separation === null) {
      separation = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] === 'undefined' || this[i] === null) {
        joiningElement = '';
      } else {
        joiningElement = this[i];
      }

      if (i !== this.length - 1) {
        joined += joiningElement + separation;
      } else {
        joined += joiningElement;
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
