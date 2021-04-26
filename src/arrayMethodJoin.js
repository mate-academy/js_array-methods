'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';
    const lastElement = this[this.length - 1];

    if (this.length === 0) {
      return '';
    }

    switch (separator) {
      case '':
        for (const element of this) {
          resultString += element;
        };
        break;

      case null:
        for (let i = 0; i < this.length - 1; i++) {
          resultString += `${this[i]}null`;
        }
        resultString += lastElement;
        break;

      default:
        for (let i = 0; i < this.length - 1; i++) {
          if (this[i] === undefined || this[i] === null) {
            resultString += '' + separator;
            continue;
          }
          resultString += `${this[i]}${separator}`;
        }
        resultString += lastElement;
        break;
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
