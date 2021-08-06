'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    const arr = this;

    for (let i = 0; i < arr.length; i++) {
      str += arr[i] === undefined || arr[i] === null
        ? separator : i === arr.length - 1
          ? `${arr[i]}` : `${arr[i]}${separator}`;
    };

    return str;
  };
}

module.exports = applyCustomJoin;
