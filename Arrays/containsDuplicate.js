function containsDuplicate(nums){
   
    // if(nums.length < 2){
    //     return nums;
    // }

    // for(let i = 0; i < nums.length; i++){
    //   for(let j = i + 1; j < nums.length; j++){
    //     if(nums[i] === nums[j]){
    //         return true;
    //     }
    //   }  
    // }
    // return false;


    // Optimized solution
     if(nums.length < 2){
        return nums;
     }

     let hasSet = new Set();
 
    for(let i = 0; i < nums.length; i++){
       if(hasSet.has(nums[i])){
        return true;
       }else{
           hasSet.add(nums[i]);
       }
    }
    return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));