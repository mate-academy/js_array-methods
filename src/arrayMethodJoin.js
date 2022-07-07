'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';

    if (this.length) {
      for (let i = 0; i < this.length; i++) {
        let arrEl = this[i];
        const isLastIteration = this.length - 1 === i;

        if (this[i] === undefined || this[i] === null) {
          arrEl = '';
        }

        if (separator === '' || separator || separator === null) {
          if (isLastIteration) {
            result += arrEl;
          } else {
            result += arrEl + '' + separator;
          }
        } else {
          if (isLastIteration) {
            result += arrEl;
          } else {
            result += arrEl + ',';
          }
        }
      }
    };

    return result;
  };
}

module.exports = applyCustomJoin;
