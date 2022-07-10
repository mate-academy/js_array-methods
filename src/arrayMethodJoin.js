'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinText = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (typeof (separator) === 'undefined') {
        joinText += this[i] + ',';
      } else if (this[i] === null || typeof (this[i]) === 'undefined') {
        joinText += ',';
      } else {
        joinText += this[i] + String(separator);
      }
    }

    if (typeof (this[this.length - 1]) !== 'undefined') {
      joinText += this[this.length - 1];
    }

    return joinText;
  };
}

module.exports = applyCustomJoin;
