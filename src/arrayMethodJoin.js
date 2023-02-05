'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separatorString;
    let finalString = '';

    switch (separator) {
      case null: separatorString = 'null';
        break;
      case undefined: separatorString = 'undefined';
        break;
      case '': separatorString = '';
        break;
      default: separatorString = separator;
    }

    for (const element of this) {
      switch (element) {
        case undefined: finalString += '';
          break;
        case null: finalString += '';
          break;
        case NaN: finalString += 'NaN';
          break;
        default: finalString += element;
      }

      if (this.indexOf(element) !== this.length - 1) {
        finalString += separatorString;
      }
    };

    return finalString;
  };
}
module.exports = applyCustomJoin;
