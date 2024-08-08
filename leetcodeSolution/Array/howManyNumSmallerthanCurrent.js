/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    // let result = [];
    // for(let i = 0; i < nums.length; i++){
    //    let ans = 0;
    //     for(let j = 0; j < nums.length; j++){
    //       if(nums[i] > nums[j]){
    //         ans++;
    //       }  
    //     }
    //      result.push(ans);
    // }


    //Optimized Solution

   // Created a sorted copy of the array 
    let sorted = [...nums].sort((a, b) => a - b);
   
   // Create a map to store the first occurence index of each number in the sorted array 
    let map = new Map();
    for (let i = 0; i < sorted.length; i++){
        if(!map.has(sorted[i])){
            map.set(sorted[i], i);
        }
    }

    // Create the result array using the map to find the count of smaller 
    let result = [];
    for (let num of nums){
        result.push(map.get(num));
    }
    

    return result;
};