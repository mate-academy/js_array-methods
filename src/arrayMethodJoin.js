'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = "";
    let division = separator;
    for (let i = 0; i < this.length; i++) {
      if (division === undefined) {
        division = ',';
      }
      if (division === null) {
        division = 'null';
      }
      if (this[i] !== undefined && this[i] !== null) {
        string += this[i];
      }
      if (this[i] !== this.length -1 && this.length > 1 && this[i] !== '') {
        string += division;
      }
    }
    return string;
  }
}

module.exports = applyCustomJoin;
