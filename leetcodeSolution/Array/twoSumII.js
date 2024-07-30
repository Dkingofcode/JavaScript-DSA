

function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length(); i++){
        let j = bSearch(numbers, target - numbers[i], i + 1);
        if(j !== -1){
            return [i + 1, j + 1];
        }
    }
}

function bSearch(array, key, start) {
    let left = start; right = array.length() - 1;
    while(left < right){
         let middle = (left + right) / 2;
         if(array[middle] > key){
             right = middle;
         }else if(array[middle] < key){
            left = middle + 1;
         }else{
            return (left === right && array[left] === key) ? left : -1;
         }
    }
}


//     Two Pointer
function TwoSumPointer(numbers, target) {
    let i = 0; let j = numbers.length - 1;

    while(i < j){
     let sum = i + j;
     if(sum > target){
        j--;
     }else if(sum < target){
        i++;
     }else{
        return [i + 1, j + 1];
     }
   }
}


    // Main code
    numbers = [2, 7, 11, 15];
    target = 22;
   
    result = TwoSumPointer($numbers, $target); 
  

    console.log("Indices:" + $result[0] + ", " + $result[1]);













