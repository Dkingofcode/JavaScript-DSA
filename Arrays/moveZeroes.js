var moveZeroes = function(nums) {

    // Brute force
     if(nums.length < 2 && nums[0] === 0){
        return nums;
     }

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
           if(nums[i] === 0){
             let temp = nums[i];
             nums[i] = nums[j];
             nums[j] = temp;
        } 
      }
    } 
        return nums;
};

function moveZeroesOptimized(nums){
   
    if(nums.length < 2){
        return nums;
    }

    let lastNonZeroFoundAt = 0;

    // Move all non-zero elements to the front of the array
    for(let i = 0; i < nums.length; i++){
       if(nums[i] !== 0){
          console.log(lastNonZeroFoundAt);
         nums[lastNonZeroFoundAt++] = nums[i];
          console.log(lastNonZeroFoundAt);
        }  
    
    }
    // Fill the remaining array with zeros
    for(let i = lastNonZeroFoundAt; i < nums.length; i++){
        nums[i] = 0;
    }

    return nums;
}

console.log(moveZeroesOptimized([0,1,0,3,0,12,0,2,3]));



