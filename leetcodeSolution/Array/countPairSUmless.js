/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    //     let ans = 0;
    //     for(let i = 0; i < nums.length; i++){
    //   //     let j = i + 1;
    //        for(let j = i + 1; j < nums.length; j++){
    //          if(nums[i] + nums[j] < target){
    //           ans++;
    //        }
    //     }   
    //   }
    
       // Optimized solution'
       nums.sort((a, b) => a - b);
       let ans = 0;
       let left = 0;
       let right = nums.length - 1;
    
       while(left < right){
        if(nums[left] + nums[right] < target){
            // All pairs between left and right 
            ans += right - left;
            left++;
        }else{
            right--;
        }
       }
    
        return ans;
    
    };