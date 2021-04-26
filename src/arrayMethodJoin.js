'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let resultString = '';

    if (this.length === 0) {
      return '';
    }

    if (separator === '') {
      for (let i = 0; i < this.length; i++) {
        resultString += this[i];
      }

      return resultString;
    }

    if (separator === null) {
      for (let i = 0; i < this.length - 1; i++) {
        if (this[i] === undefined || this[i] === null) {
          resultString += '' + 'null';
          continue;
        }
        resultString += `${this[i]}null`;
      }
      resultString += `${this[this.length - 1]}`;

      return resultString;
    }

    if (!separator) {
      for (let i = 0; i < this.length - 1; i++) {
        resultString += `${this[i]},`;
      }
      resultString += `${this[this.length - 1]}`;
    }

    if (separator) {
      for (let i = 0; i < this.length - 1; i++) {
        if (this[i] === undefined || this[i] === null) {
          resultString += '' + separator;
          continue;
        }
        resultString += `${this[i]}${separator}`;
      }
      resultString += `${this[this.length - 1]}`;
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
