'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newstr = '';
    let newseparator = separator;

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if (newseparator === null) {
        newseparator = 'null';
      }

      if (i === this.length - 1) {
        if (this[i] === undefined || this[i] === null) {
        } else {
          newstr += this[i];
        }
      } else {
        if (this[i] === undefined || this[i] === null) {
          newstr += newseparator;
        } else {
          newstr += this[i] + newseparator;
        }
      }
    }

    return newstr;
  };
}

module.exports = applyCustomJoin;
