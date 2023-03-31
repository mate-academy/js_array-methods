'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const sep = separator !== undefined ? separator : ',';
    let resoult = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        resoult += sep;
      }

      const element = this[i] === null || this[i] === undefined ? '' : this[i];

      resoult += element;
    }

    return resoult;
  };
}

module.exports = applyCustomJoin;
