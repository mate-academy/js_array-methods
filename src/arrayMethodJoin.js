'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here

    let target = '';
    const sepUpd = (separator === undefined) ? ',' : separator;
    const arrLenght = this.length;

    for (let i = 0; i < arrLenght; i++) {
      if (this[i] === null || this[i] === undefined) {
        target = target.concat('');
      } else {
        target = target.concat(this[i]);
      }

      if (i < arrLenght - 1) {
        target = target.concat(sepUpd);
      }
    }

    return target;
  };
}

module.exports = applyCustomJoin;
