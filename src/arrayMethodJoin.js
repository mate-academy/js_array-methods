'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    const sourceAarrayCopy = [...this];

    for (let i = 0; i < sourceAarrayCopy.length; i++) {
      if (sourceAarrayCopy[i] === null || sourceAarrayCopy[i] === undefined) {
        sourceAarrayCopy[i] = '';
      }
    }

    let divider = separator;

    if (divider === undefined) {
      divider = ',';
    }

    let string = '' + sourceAarrayCopy[0];

    for (let i = 1; i < sourceAarrayCopy.length; i++) {
      string += `${divider}${sourceAarrayCopy[i]}`;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
