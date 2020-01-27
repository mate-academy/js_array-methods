'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let mySeparator = separator;

    if (mySeparator === null) {
      mySeparator = 'null';
    }

    switch (this.length) {
      case 0: {
        return str;
      }

      case 1: {
        return String(this[0]);
      }
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        str += this[i].toString();
      } else {
        str += this[i].toString() + mySeparator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
