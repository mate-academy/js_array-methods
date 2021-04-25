'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let elementSeparator = separator;

    if (elementSeparator === null) {
      elementSeparator = 'null';
    }

    let joinedElements = '';

    for (const element of this) {
      if (element === null || element === undefined) {
        joinedElements += '' + elementSeparator;
      } else if (element === this[this.length - 1]) {
        joinedElements += element;
      } else {
        joinedElements += element + elementSeparator;
      }
    }

    return joinedElements;
  };
}

module.exports = applyCustomJoin;
