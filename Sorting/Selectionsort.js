function selectionSort(nums){

    for(let i = 0; i < nums.length; i++){
        // Set current index as minimum
         let min = i;
         let temp = nums[i];
      for(let j = i + 1; j < nums.length; j++){
        if(nums[j] < nums[min]){
          // Update minimum if current is lower than what we has previously
            min = j;
        }
      } 
      nums[i] = nums[min];
      nums[min] = temp;
  }
  return nums;
}

console.log(selectionSort([3, 2, 6, 9, 4, 5, 1, 7, 5, 4, 3]))