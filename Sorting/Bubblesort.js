function BubbleSort(nums){

    
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            
            if(nums[j] > nums[j + 1]){
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
     

        }
    }
    return nums;
}

console.log(BubbleSort([1,6,5,4,9,6,2,3,]))