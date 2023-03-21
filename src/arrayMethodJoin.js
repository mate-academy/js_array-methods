'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let newString = '';

    switch (this) {
      case this.length === 1:
        newString = this;

        return;
      default:
        for (let i = 0; i < this.length; i++) {
          switch (true) {
            case typeof this[i] === 'undefined':
              newString += '';
              break;
            case this[i] === null:
              newString += '';
              break;
            default:
              newString += this[i];
          }

          if (i < this.length - 1) {
            newString += separator;
          }
        };
        break;
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
