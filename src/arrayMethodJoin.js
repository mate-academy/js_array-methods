'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let stringOfArray = '';
    let joinElements;
    const firstElement = this[0];

    switch (this.length) {
      case 0:
        return stringOfArray;
      case 1:
        stringOfArray = `${this[0]}`;

        return stringOfArray;
      default:
        break;
    };

    switch (separator) {
      case undefined:
        joinElements = ',';
        break;
      case null:
        joinElements = 'null';
        break;
      default:
        joinElements = separator;
    };

    switch (firstElement) {
      case null:
        break;
      case undefined:
        break;
      default:
        stringOfArray += `${firstElement}`;
    };

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        stringOfArray += `${joinElements}`;
      } else {
        stringOfArray += `${joinElements}` + `${this[i]}`;
      }
    };

    return stringOfArray;
  };
}

module.exports = applyCustomJoin;
