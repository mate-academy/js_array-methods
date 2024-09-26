'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let myString = '';

    if (this.length < 1) {
      return myString;
    }

    for (let i = 0; i < this.length; i++) {
      switch (true) {
        case this[i] === 'null':
          myString = myString + 'null';
          break;
        case this[i] === false && typeof (this[i]) === 'boolean':
          myString = myString + 'false';
          break;
        case this[i] !== null && this[i] !== undefined && this[i] !== '':
          myString = myString + (+this[i]);
          break;
        default:
          break;
      }

      if (i !== this.length - 1) {
        myString = myString + separator;
      }
    }

    return myString;
  };
}

module.exports = applyCustomJoin;
