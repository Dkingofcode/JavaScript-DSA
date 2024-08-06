/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let sum = 0;

   // Helper function to calculate the XOR of each subset
   function helper(index, currentXOR){
       if(index === nums.length){
           sum += currentXOR;
           return;
       }

       // Include the current element in the subset
       helper(index + 1, currentXOR ^ nums[index]);

       // Exclude the current element from the subset
       helper(index + 1, currentXOR);
   }

   // Start the recursive helper function
   helper(0, 0);

   return sum;
};