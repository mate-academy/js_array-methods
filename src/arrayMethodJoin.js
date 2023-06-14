/*eslint-disable */
"use strict";

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function (separator = ",") {
    let separatedArr = "";

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        separatedArr += this[i];
      }

      if (i !== this.length - 1) {
        separatedArr += separator;
      }
    }
    return separatedArr;
  };
}

module.exports = applyCustomJoin;
