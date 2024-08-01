let ans = [];
function reverseString(str){

     if(str.length === 1){
        ans.push(str);
        return ans.join('');
     }

     ans.push(str[str.length - 1]);
    let reString = str.substr(0, str.length - 1);
     
    return reverseString(reString);
}

console.log(reverseString("popmeyer"));