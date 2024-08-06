/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let n = grid.length;
    let ans = [];

     // We only need to check up to n - 2 to avoid out-of-bounds
   for(let i = 0; i < n - 2; i++){
       let row = [];
     for(let j = 0; j < n - 2;  j++){
       let maxVal = 0;
       // slide through the 3X3 grid
       for(let k = i; k < i + 3; k++){
         for(let l = j; l < j + 3; l++){
           maxVal = Math.max(maxVal, grid[k][l]);
         }  
       }
        row.push(maxVal);
     }  
     ans.push(row);
   }
   return ans;
};






