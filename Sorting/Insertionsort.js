function Insertionsort(nums) {
   for(let i = 0; i < nums.length; i++){
    //let first = nums[i]
    if (nums[i] < nums[0]){
        // move number to the first position
        nums.unshift(nums.splice(i, 1)[0]);
    }else {
        // find where number should go
        for(let j = 1; j < 1; j++){
            if(nums[i] > nums[j - 1] && nums[i] < nums[j]){
                // move number to the right spot
                nums.splice(j, 0, nums.splice(i, 1)[0]);
            }
          }
       }
    } 
   return nums;
}

console.log(Insertionsort([3, 2, 3, 1, 5, 7, 6, 9,]))