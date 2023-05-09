'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    let resultString = '';
    let newSeparator = separator;

    if (this[0] === null || this[0] === undefined) {
      resultString = '';
    } else {
      resultString = this[0].toString();
    }

    switch (newSeparator) {
      case (undefined):
        newSeparator = ',';
        break;

      case (null):
        newSeparator = 'null';
        break;

      default:
        newSeparator = separator.toString();
    }

    for (let i = 1; i < this.length; i++) {
      let item = this[i];

      if (item === null || item === undefined) {
        item = '';
      }

      resultString += newSeparator + item.toString();
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
