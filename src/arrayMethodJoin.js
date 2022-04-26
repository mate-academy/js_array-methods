'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    const length = this.length;

    let separUsed = separator;

    if ('' + separUsed === 'undefined') {
      separUsed = ',';
    }

    for (let i = 0; i < length; i++) {
      if (typeof this[i] === 'undefined' || this[i] === null) {
        ;
        // if equal to just pass. I could not make !equal to work
      } else {
        result += this[i];
      }

      if (i !== length - 1) {
        result += separUsed;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
