'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let newPhrase = '';
    let newSeparator = separator;

    switch (separator) {
      case undefined :
        newSeparator = ',';
        break;
      case null :
        newSeparator = 'null';
        break;
      default:
        break;
    }

    for (let i = 0; i < this.length; i++) {
      switch (this[i]) {
        case undefined:
        case null:
          if (i !== (this.length - 1)) {
            newPhrase += '' + newSeparator;
          } else {
            newPhrase += '';
          }
          break;
        default :
          if (i !== (this.length - 1)) {
            newPhrase += this[i] + newSeparator;
          } else {
            newPhrase += this[i];
          }
          break;
      }
    }

    return newPhrase;
  };
}

module.exports = applyCustomJoin;
