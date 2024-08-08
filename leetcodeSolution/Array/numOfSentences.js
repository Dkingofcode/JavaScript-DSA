/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    maxCount = 0;
    for(let i = 0; i < sentences.length; i++){
        let count = 0;
      for(let j = 0; j < sentences[i].length; j++){
        if(sentences[i][j] === " "){
            count+= 1;
        }
      }
      console.log(count);
      maxCount = Math.max(maxCount, count);
      console.log(maxCount);
    }
    return maxCount;
};

console.log(mostWordsFound(["alice and bob love leetcode","i think so too","this is great thanks very much"]
))