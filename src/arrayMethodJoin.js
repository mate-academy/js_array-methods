'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let joinedString = validateElement(this[0]);

    for (let i = 1; i < this.length; i++) {
      joinedString += separator;

      joinedString += validateElement(this[i]);
    }

    return joinedString;
  };
}

function validateElement(element) {
  if (element !== undefined && element !== null) {
    return `${element}`;
  }

  return '';
}

module.exports = applyCustomJoin;
