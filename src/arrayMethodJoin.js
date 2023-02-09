'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separatorString;
    let finalString = '';

    if (separator !== ('null' || 'undefined')) {
      separatorString = separator;
    }

    for (const element of this) {
      if ((element !== null) && (element !== undefined)) {
        finalString += element;
      }

      if (this.indexOf(element) !== this.length - 1) {
        finalString += separatorString;
      }
    };

    return finalString;
  };
}
module.exports = applyCustomJoin;
