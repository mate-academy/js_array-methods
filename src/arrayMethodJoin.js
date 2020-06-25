'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let newPhrase = '';
    let newSeparator = separator;

    if (separator === undefined) {
      newSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if ((this[i] === undefined) || (this[i] === null)) {
        if (i !== (this.length - 1)) {
          newPhrase = newPhrase + '' + newSeparator;
        } else {
          newPhrase += '';
        }
      } else {
        if (i !== (this.length - 1)) {
          newPhrase = newPhrase + this[i] + newSeparator;
        } else {
          newPhrase += this[i];
        }
      }
    }

    return newPhrase;
  };
}

module.exports = applyCustomJoin;
