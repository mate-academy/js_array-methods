'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const mergedArray = [];
    let counter = 0;

    for (const string of this) {
      mergedArray[counter] = string;
      counter++;
    }

    let result = '';
    let firstLoop = true;

    for (let string of mergedArray) {
      if (string === undefined || string === null) {
        string = '';
      }

      if (firstLoop) {
        result = String(string);
        firstLoop = false;
      } else {
        result = `${result}${separator}${string}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
