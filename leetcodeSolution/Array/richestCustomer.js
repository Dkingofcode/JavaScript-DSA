/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxSum = 0;
    
    for(let i = 0; i < accounts.length; i++){
       let sum = 0;
        for(let j = 0; j < accounts[i].length; j++){
        sum = sum + accounts[i][j];
        console.log(sum);
      }
      console.log(sum);
      if(sum > maxSum){
        maxSum = sum;
      }
    }
    return maxSum;
};

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]))