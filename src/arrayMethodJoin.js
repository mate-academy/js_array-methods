'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separatorStirng = separator;
    if (typeof separator !== 'string') {
      separatorStirng = JSON.stringify(separator);
    }
    return String(this.length === 0
      ? '' : this.map(el => el === undefined || el === null
        ? '' : el)
        .reduce((result, curent) => result + separatorStirng + curent));
  };
}

module.exports = applyCustomJoin;
