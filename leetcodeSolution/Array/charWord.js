var findWordsContaining = function(words, x) {
    let answer = [];

    for(let i = 0; i < words.length; i++){
       if(words[i].includes(x)){
         answer.push(i);  
       }  
    }
    return answer;
};

console.log(findWordsContaining(["leet", "code"], "e"));
















