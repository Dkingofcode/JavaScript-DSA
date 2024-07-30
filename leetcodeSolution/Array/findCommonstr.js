// Question: Find if there ia common element between two arrays.

// For example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'a'];
// returns False
//---------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// returns true

// 2 parameters - arrays - no size limit
// returns true or false



const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];


function findCommonElement(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                return true;
            }
        }
    }
    return false;
}


// Time complexity - O(n*m)
// Space complexity - O(1);

// Optimized Solution
function findCommonElementMap(arr1, arr2){
    let map  = {};
    
    // loop through the first array and create object where properties is equal to items in the array
    for(let i = 0; i < arr1.length; i++){
     if(!map[arr1[i]]){
        const item = arr1[i];
        map[item] = true;
     }
  }

  // loop through the second array and check if any of its value is present in the object
  for(let j = 0; j < arr2.length; j++){
      if(map[arr2[j]]){
        console.log(true);
        return true
      }
  }
  console.log(false);
  return false;
}

findCommonElementMap(array1, array2);

function findCommonElement3(arr1, arr2){
    return arr1.some(item => arr2.includes(item));
}


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


