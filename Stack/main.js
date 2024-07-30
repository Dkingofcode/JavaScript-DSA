//  Stack implementation using linked list

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
       return this.top; 
    }

    push(value){
        const newNode = {
            value: value,
            next: null
        }

        if(this.length === 0){
           this.top = newNode;
           this.bottom = this.top;
           }else{
             let head = this.top;
             this.top = newNode;
             this.top.next = head;
           }
        this.length++;  
        return this;
    }

    pop(){
       if(!this.top){
        return null;
       }

       if(this.top === this.bottom){
        this.bottom = null;
       }


       this.top = this.top.next;
       this.length--;
       return this;
    }
 }



// Stack implementation using Arrays

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
      this.array = [];
    }

    peek() {
       return this.array[this.array.length - 1]; 
    }

    push(value){
        this.array.push(value);
        return this;
    }

    pop(){
       this.array.pop();
       return this;
      
    }

    push(value){
      //  const newNode;
          this.push(value);
        this.length++;  
        return this;
    }

    pop(){     
      this.pop(); 
       this.length--;
       return this;
    }
 }

