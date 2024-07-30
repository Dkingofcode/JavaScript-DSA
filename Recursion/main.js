// Write two functions that finds the factorial of any
// number. One should use recursive, the other should just use a for loop.


function findFactorialRecursive(number){
    // code here
     if(number <= 2){
        return number;
     }
        let answer = number * findFactorialRecursive(number - 1); 
        return answer;
}


function findFactorialIterative(number){
    // code here

    let answer = 1;
    if(number <= 1){
       return number;
    } 
    for(let i = 1; i <= number; i++){
      answer *= i;      
    }
    return answer;
}


console.log(findFactorialRecursive(4));
console.log(findFactorialIterative(4));



