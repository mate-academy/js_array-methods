'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let mySeparator = separator;

    switch (mySeparator) {
      case undefined: {
        mySeparator = ',';
        break;
      }

      case null: {
        mySeparator = 'null';
        break;
      }
    }

    if (this.length === 0) {
      return '';
    }

    if (this.length === 1) {
      return String(this[0]);
    }

    this.forEach((item, index) => {
      if (item === null || item === undefined) {
        this[index] = '';
      }
    });

    return this.reduce((str1, str2) => {
      return str1 + mySeparator + str2;
    });
  };
}

module.exports = applyCustomJoin;
