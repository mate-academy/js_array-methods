'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newStr = ``;

    for (let i = 0; i < this.length; i++) {
      let oneWord = this[i];

      if (oneWord === null
        || oneWord === undefined
        || oneWord.length === 0) {
        oneWord = '';
      }

      if (i === this.length - 1) {
        newStr += `${oneWord}`;
      } else {
        newStr += `${oneWord}${separator}`;
      }
    };

    return newStr;
  };
}

module.exports = applyCustomJoin;
