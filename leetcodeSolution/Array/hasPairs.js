// Question: Take a collection of number and find a matching pair that equal a sum.

// Example1: [1, 2, 3, 9] sum = 8 return false
// Example2: [1, 2, 4, 4] sum = 8 return true

// Key Questions:
// Is the collection sorted?: If Yes, we use two pointers or binary Search, If no we use hashMap
// Can we have repeated values in the collection?: yes
// Can we have negative values?: Yes
// Can we use the same value to form a pair: No
// Does the collection allow multiple data types e.g strings, floating point etc.: No, only integers


// Brute Force SOlution
function hasPair(arr, sum){
  for(let i = 0; i < arr.length; i++){ // O(n)
    for(let j = i + 1; j < arr.length; j++){ // O(n)
        if(arr[i] + arr[j] === sum){ // O(1)
            return true;  // O(1)
       }
      }
     }
     return false;
}
            
            // Time complexity: O(n * n) + O(1 + 1) == O(n^2)
            // Space Complexity: O(1)

// Binary Search
function hasPairBin(arr, sum){
   // let mid = i + j / 2;
    for(let i = 0; i < arr.length; i++){ // O(n)
        let complement = sum - arr[i];
        let left  = i + 1;
        let right = arr.length - 1;
        let mid = Math.floor((left + right) / 2);
        while(left <= right){   // O(log n)
            if(arr[mid] === complement){
                return true;
                }else if(arr[mid] < complement){
                left = mid + 1;
            }else{
                right = mid - 1;
            } 
        }  
    }
    return false;
}

// Time Complexity: O(n * log n) == O(nlogn)
// Space COmplexity: O(n)

// Two pointers
function hasPairsTwoPointer(arr, sum){
    let i= 0, j = arr.length - 1;
    for(let i = 0; i < arr.length; i++){ // O(n)
        let addition = arr[i] + arr[j];  
        if(addition === sum){
            return true;
        }else if(addition < sum){
            i++;
        }else{
            j--;
        }
    }
    return false;
}

// Time Complexity: O(n)
// Space COmplexity: O(n)

// If collection/array is not sorted
function hasPairHash(arr, sum){
    let map = {};
    let answer = [];
    for(let i = 0; i < arr.length; i++){ // O(n)
        let complement = sum - arr[i];
        if(map.hasOwnProperty(complement)){
           // let complement = sum - arr[i]
           return true;
           }else{
            map[arr[i]] = i;
        }
    }
    return false;
}

//console.log(hasPairBin([1, 2, 3, 9], 8));

let arr = [1, 3, 4, 7, 10];
let sum = 11;
console.log(hasPairHash(arr, sum)); // Output: true


// Time Complexity: O(n)
// Space COmplexity: O(n)

// Step By Step through a problem
// 1. When the interviewer says the question, write down the key points at the top. (SOrted array, etc). Make sure you have all the details. Show ho
// 2. Make sure you double check: What are the inputs?. What are the outputs.
// 3. What is the most important value of the problem. Do you have time, and space and memory, etc.. What is the main goal?
// 4. Don't be annoying and ask too many questions.
// 5. Start with the naive/brute force approach. First thing that comes into mind. It shows that you're able to think well and critically. 
// 6. Tell them why this appraoch is not the best (i.e O(n^2) or higher, not readable, etc..)
// 7. Walk through your approach, comment things and see where you may be able to break things. Any repetition, bottlenecks like O(n^2), or unneccessary code, did you use all the information that the interviewer gave you
// 8. Before you start coding, walk through your code and write down the steps you are going to do.
// 9. Modularize your code from the very beginning. Break up your code into beautiful small pieces and add just comments if you need to.
// 10. Start actually writing your code now. Keep in mind that the more you prepare and understand what you need to code, the better the whiteboard will be
// 11. Think about error checks and how you can break this code. Never make assumptions about the input. Assume people are trying to break your code into smaller bits. 
// 12. Don't use bad/confusing names like i and j. Write code that reads well.
// 13. Test your code: Check for no params, 0, undefined, null, massive arrays, async code, etc.. Ask the interviewer if we can make assumption about the input
// 14. Finally talk to the interviewer where you would improve the code. Does it work? Are there different approaches? Is it readble? What would you improve?.
// 15. If your interviewer is happy with the solution, the interview usually end here. It is also common that the interviewer asks you extension questions.
