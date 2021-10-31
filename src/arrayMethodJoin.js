'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let termSep = separator;
    const arrLeghts = this.length;

    if (separator === undefined) {
      termSep = ',';
    }

    if (arrLeghts === 0) {
      return result;
    }

    for (let i = 0; i < arrLeghts; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += '';
      } else {
        result += this[i];
      }

      if ((i + 1) === arrLeghts) {
        return result;
      } else {
        result += termSep;
      }
    }
  };
}
module.exports = applyCustomJoin;
