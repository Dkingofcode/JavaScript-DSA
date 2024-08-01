function QuickSort(nums){

    let pivot  = nums.length -1;
    let left = 0;
    let right = pivot;
    while(left <= right){
      if(nums[i] > nums[pivot]){
         let temp = nums[pivot];
         let num = nums[i];
         nums[i] = nums[pivot - 1];
         nums[pivot - 1] = temp;
         nums[pivot] = num; 
      }
       left++;

       
      
    }
}