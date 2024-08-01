function mergeSort(nums) {
    if(nums.length === 1){
        return nums;
    }

    // Split array int right and left
     let left = nums.slice(0, nums.length / 2);
     let right = nums.slice(nums.length / 2);
   //  let mid = left + right / 2;  
      
     

    return merge (mergeSort(left), mergeSort(right));

}


function merge(left, right){
    // combine left and right to solve problem
    let ans = [];
    let leftIndex=0;
    let rightIndex = 0;


    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right [rightIndex]){
           ans.push(left[leftIndex]);
           leftIndex++;
        }else if(left[leftIndex] > right[rightIndex]){
            ans.push(right[rightIndex]);
            rightIndex++;
        }else{
            ans.push(left[leftIndex])
        }
    }

    if(left[leftIndex]){
        ans.push(left[leftIndex])
    }

    if(right[rightIndex]){
        ans.push(right[rightIndex]);
    }
   
    return ans;
}