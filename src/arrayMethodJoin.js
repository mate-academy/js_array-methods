'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const currentLength = this.length;

    if(currentLength === 0) {

      return '';
    }

    let str = '';

    for (let i = 0; i < currentLength; i++) {

      if(this[i] === null || this[i] === undefined || this[i] === '') {
        if (i < this.length - 1) {
          str += separator
        }
        continue;
      } else {
        str += this[i];
        str += i < this.length -1 ? separator : ''
      }

    }

    return str
  };
}

module.exports = applyCustomJoin;
