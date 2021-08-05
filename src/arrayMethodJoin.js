'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let newSerarator = separator
    let res = ''
  
    if(!separator) {
      newSerarator = ','
    }
  
    for(let i = 0; i < arr.length; i++) {
      if(arr[i+1]){
        res += arr[i] + newSerarator
      } else {
        res += arr[i] 
      }
     
    }
    return res
  }
}

module.exports = applyCustomJoin;
