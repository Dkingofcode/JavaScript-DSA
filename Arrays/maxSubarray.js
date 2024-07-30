var maxSubArray = function(nums) {
    

    // Brute Force
    // Create a nested loop to compare all the sums of the subarrays
     let maxSum = 0;
     let sum = 0;
    for(let i = 0; i < nums.length; i++){ // O(N)
      for(let j = i; j < nums.length; j++){ // O(N)
          sum += nums[j];
         if(sum > maxSum){
            maxSum = sum;
         }

         if(j === nums.length - 1){
            sum = 0;
         }
      }
    }
    return maxSum;
};


function maxSubArrayOptimal(nums){
   // Optimized solution
   // Use two pointers to locate and add all possible subarray sums
   let sum = nums[0];
   let maxSum = nums[0];
   for (let i = 1; i < nums.length; i++){
    // Either start a new subarray at nums[i] or continue with the existing subarray
      currentSum = Math.max(nums[i], currentSum + nums[i]);
    // Update maxSum if the current subArray hash a higher sum
     maxSum = Math.max(maxSum, currentSum);

      
   } 

   return maxSum;
}



//console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
 console.log(maxSubArrayOptimal([-2,1,-3,4,-1,2,1,-5,4]));