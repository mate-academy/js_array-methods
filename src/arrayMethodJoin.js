'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedText = '';

    for (let i = 0; i < this.length; i++) {
      switch (this[i]) {
        case null:
        case undefined:
          joinedText += '';
          break;

        default:
          joinedText += this[i];
          break;
      }

      if (i !== this.length - 1) {
        joinedText += separator;
      }
    }

    return joinedText;
  };
}

module.exports = applyCustomJoin;
