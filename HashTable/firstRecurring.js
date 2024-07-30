function firstRecurringCharacter(nums){
    

      // Brute force
      for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
           if(nums[i] === nums[j]){
            return nums[i];
           } 
        }
      }

    return undefined;     
} // O(n^2)



function firstRecurringCharacterHash(nums){
   let hash = new Set();
    for(let i = 0; i < nums.length; i++){
        if(hash.has(nums[i])){
            return nums[i];
        }else{
            hash.add(nums[i]);
        }
    }
    return undefined;
}


console.log(firstRecurringCharacterHash([2, 1, 0, 3, 6, 5, 1, 2, 4]));
