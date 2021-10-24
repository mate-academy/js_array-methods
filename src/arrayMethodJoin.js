'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // empty array
    if (this.length === 0) {
      return '';
    }

    // array of one
    if (this.length === 1) {
      return ('' + this[0]);
    }

    // empty separator or null or empty string
    let thisSeparator;

    if (separator === null) {
      thisSeparator = 'null';
    } else if (separator === '') {
      thisSeparator = '';
    } else if (!separator) {
      thisSeparator = ',';
    } else {
      thisSeparator = separator;
    }

    // first element undefined or null
    let firstItem;

    if (this[0] === null) {
      firstItem = '';
    } else if (typeof this[0] === 'undefined') {
      firstItem = '';
    } else {
      firstItem = this[0];
    }

    let concatString = firstItem;

    for (let i = 1; i < this.length; i++) {
      let item;

      // element undefined or null
      if (this[i] === null) {
        item = '';
      } else if (typeof this[i] === 'undefined') {
        item = '';
      } else {
        item = this[i];
      }
      concatString = concatString + thisSeparator + item;
    }

    return concatString;
  };
}

module.exports = applyCustomJoin;
