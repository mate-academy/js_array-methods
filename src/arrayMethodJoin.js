'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let convertedString = '';
    let delimiter = separator;

    const filterDataForJoin = this.map((element) =>
      (element === undefined || element === null) ? '' : element
    );

    if (separator === undefined) {
      delimiter = ',';
    } else if (separator === null) {
      delimiter = 'null';
    }

    for (let i = 0; i < filterDataForJoin.length; i++) {
      convertedString += (i === filterDataForJoin.length - 1)
        ? filterDataForJoin[i] : filterDataForJoin[i] + delimiter;
    }

    return convertedString;
  };
}

module.exports = applyCustomJoin;
