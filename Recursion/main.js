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

// 0 , 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

function fibonacciIterative(n){
    // code here
     if(n == 0){
       return 0;
     }else if(n === 1){
        return 1;
     }

     
    let first = 0;
    let second = 1;
    let answer = first + second;
     for(let i = 2; i < n; i++){
         first = second;
         second = answer;
         answer = first + second;
     }
     return answer;

}

function fibonacciRecursive(n){
    // code here

    if(n === 0){
        return 0;
    }else if(n === 1){
        return 1;
    }

    return  fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);

}


// console.log(findFactorialRecursive(4));
// console.log(findFactorialIterative(4));

console.log(fibonacciIterative(7));
console.log(fibonacciRecursive(7))

