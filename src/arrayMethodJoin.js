'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function (separator = ',') {
    const stringFromArray = this.toString();
    const copyJoinOpportunity = stringFromArray.replace(/,/g, separator);

    return copyJoinOpportunity;
  };
}

module.exports = applyCustomJoin;
