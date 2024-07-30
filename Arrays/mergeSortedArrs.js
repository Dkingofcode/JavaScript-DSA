function mergeSortedArrays(array1, array2){
    const mergedArray = [];
   // let array1Item = array1[0];
   // let array2Item = array2[0];
    let i = 0;
    let j = 0;

    if(array1.length === 0){
        return  array2;
    }

    if(array2.length === 0){
        return array1;
    }

      while(i < array1.length && j < array2.length){
         if(array1[i] < array2[j]){
            mergedArray.push(array1[i]);
            i++;
         }else{
             mergedArray.push(array2[j]);
             j++;
         }
      }

      if(i < array1.length){
        mergedArray.push(array1[i]);
        i++;
      }

      if(j < array2.length){
        mergedArray.push(array2[j]);
        j++;
      }
       
    

      console.log(mergedArray);

    return mergedArray;
}

// Time COmplexity: O(nm)
// Space COmplexity: O(nm);

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

