'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    let newArray = [...this];

    for (let i = 0; i < newArray.length; i++) {
      if (i === newArray.length - 1) {
        str += newArray[i];
        break;
      }

      if (newArray[newArray.length - 1] === undefined) {
        newArray[newArray.length - 1] = '';
      }

      if (newArray[i] === null || newArray[i] === undefined) {
        newArray[i] = '';
      }

      if (separator === undefined) {
        str += newArray[i] + ',';
      } else {
        str += newArray[i] + String(separator);
      }
    };

    return str;
  };
}

module.exports = applyCustomJoin;
