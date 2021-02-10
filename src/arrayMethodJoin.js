'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let container = '';

    if (this.length > 1) {
      if (this[0] !== null) {
        container += this[0];
      }

      for (let i = 1; i < this.length; i++) {
        if (separator === null) {
          container += 'null' + this[i].toString();
        } else if (this[i] === null) {
          container += separator;
        } else if (this[i] === undefined) {
          container += separator;
        } else {
          container += separator + this[i];
        }
      }
    }

    if (this.length === 1) {
      container += this;
    }

    return container;
  };
}

module.exports = applyCustomJoin;
