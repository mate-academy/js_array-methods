'use strict';

/**
 * Implement method join
 */

function separatorFilter(divider) {
  switch (divider) {
    case null: {
      return 'null';
    }

    case undefined: {
      return 'undefined';
    }

    default: {
      return divider;
    }
  }
}

function applyCustomJoin() {
  [].__proto__.join2 = function(userSeparator = ',') {
    let resultString = '';
    let separator = separatorFilter(userSeparator);

    for (const part of this) {
      if (this.indexOf(part) === this.length - 1) {
        separator = '';
      }

      if (part === null || part === undefined) {
        resultString += separator;
        continue;
      }

      resultString += part + separator;
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
