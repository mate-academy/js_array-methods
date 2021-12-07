'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let anwser = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        anwser += '';
      } else {
        anwser += this[i];
      }

      if (i < this.length - 1 && this.length !== 1 && separator !== '') {
        if (separator === null) {
          anwser += null;
        } else if (!separator) {
          anwser += ',';
        } else {
          anwser += separator;
        }
      }
    }

    return anwser;
  };
}

module.exports = applyCustomJoin;
