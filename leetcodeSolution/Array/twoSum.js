



function twoSum(numbers, target){
    let ans = [];
    for(let i = 0; i < numbers.length; i++){
      for(let j = i + 1; j < numbers.length; j++){
        //let ans  = []; 
        if(numbers[j] == target - numbers[i]){
            ans.push(i);
            ans.push(j);
            return ans;
         }
      }  
    }
    return ans; // return an empty array if no answer is found
}

function twoSumHash(numbers, target){
    // Create a map to store the difference of the target and each element
    let map = new Map();

    // Iterate through the array
    for (let i = 0; i < numbers.length; i++){
        let complement = target - numbers[i];

        // check if the complement is already in the map
        if (map.has(complement)) {
            // If found, return the indices
            return [map.get(complement), i];
        }

        // Store the current number and its index in the map
        map.set(numbers[i], i);
    }

    // Return an empty array if no solution is found
    return [];
}

//twoSum();

//numbers = []
let numbers = [3, 4, 5, 2, 1];
let target = 5;
console.log(twoSumHash(numbers, target));