'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const splitter = typeof separator === 'string' ? separator : separator + '';
    let joined = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i] === null || this[i] === undefined ? '' : this[i];

      joined += element;

      if (i !== this.length - 1) {
        joined += splitter;
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
