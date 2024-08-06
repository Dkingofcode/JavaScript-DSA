const combinationSum2 = (candidates, target) => {
   let results = [];

   // Sort the candidates to help skip duplicates
   candidates.sort((a, b) => a -b);

   function backtrack(start, target, path){
    if(target === 0){
        // If the target is 0, we found a valid combination 
       results.push([...path]);
       return;
    
    }

    for(let i = start; i < candidates.length; i++){
        if(i < start && candidates[i] === candidates[i + 1]){
            // skip candidates
            continue;
        }

        if(candidates[i] > target){
            // If the current number is greater than the target, no need to continue;
            break;
        }

        // Include the current  number in the path
        path.push(candidates[i]);
        // recurse with the updated target and start position
        backtrack(i + 1, target - candidates[i], path);
        // Backtrack and remove the number from the path
        path.pop();
    }
   }

   // Start backtracking with an empty path
   backtrack(0, target, []);

   return results;
};