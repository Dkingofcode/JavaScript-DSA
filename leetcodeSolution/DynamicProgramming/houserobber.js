/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let sum = 0;
    let othersum = 0;
    let maxSum = 0;
    let i = 0;
    let j = i + 1;
    if(nums.length < 2){
        return nums[i];
    }

    if(nums.length === 2){
        return Math.max(nums[i], nums[j]);
    }

    for(let i = 0; i < nums.length; i++){
        let sum = 0;
        sum += nums[i];
        for(let j = i + 2; j < nums.length; j = j + 2){
           sum += nums[j];

        }
        
        console.log(sum);
        maxSum = Math.max(sum, othersum);

    }

    

    return maxSum;
};

console.log(rob([1, 2, 3, 1]))