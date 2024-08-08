/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let leftAns = [];
    let rightAns = [];
    let lsum = 0;
    let rsum = 0;
    let result = [];

     if(nums.length < 2){
        result.push(0);
        return result;
     }

    for(let i = 0; i < nums.length; i++){
       leftAns.push(lsum);
       lsum = lsum + nums[i];
    }
    
    for(let k = nums.length - 1; k >= 0; k--){
        rightAns.unshift(rsum);
        console.log(rsum);
        rsum = rsum + nums[k];
        }
        
        
        for(let j = 0; j < leftAns.length; j++){
            let   TotAns = Math.abs(leftAns[j] - rightAns[j]);
            result.push(TotAns);
            }
            
        console.log(rightAns);
        console.log(leftAns);
    return result;
};


console.log(leftRightDifference([10, 4, 8, 3]))