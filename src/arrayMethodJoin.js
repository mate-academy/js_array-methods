'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator=',') {
    const incomingData = [...this];

    if (incomingData.length > 0) {
    let result = '';

    for (let i = 0; i < incomingData.length; i++) {
    let element = incomingData[i];

    if (element === null || element === undefined) {
      element = '';
    }

    if (separator === null && i !== incomingData.length - 1) {
      result += `${element}null`;
    }

    if (i === incomingData.length - 1) {
      result += `${element}`;

      return result;
    }

    if (separator !== null) {
      result += `${element + separator}`;
    }
  }
}
  return '';
  
  };
}

module.exports = applyCustomJoin;
