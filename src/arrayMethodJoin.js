'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const elements = [...this];

    if (elements.length === 0) {
      return '';
    }

    let joinedElements = '';

    for (let i = 0; i < elements.length - 1; i++) {
      if (elements[i] === undefined || elements[i] === null) {
        elements[i] = '';
      }
      joinedElements += elements[i] + separator;
    }

    return joinedElements + elements[elements.length - 1];
  };
}

module.exports = applyCustomJoin;
