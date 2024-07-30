// Create a function that reverses a string
// 'Hi My name is Andrei'
// 'ierdnA si eman yM iH'

function reverse(str){
    // check input
    if (!str || str.length < 2 || typeof(str) !== 'string'){
        return "Incorrect Input"
    }



    let arr = [];
    let index = 0;

    for(let i = str.length - 1; i >= 0; i--){ // O(n)
         arr[index] = str[i];
         index++;
    }

    return arr.join('');

}

// Time Complexity: O(n)
// Space Complexity: O(n)

console.log(reverse("Baller"));