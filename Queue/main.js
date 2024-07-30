

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
       const newNode = {
           value: value,
           next: null
       }

       if(!this.first){
         this.first = newNode;
         this.last = newNode;
       }else{
         this.last.next = newNode;
         this.last = newNode;
       }
        this.length++;
    }

    dequeue(){
        if(!this.first){
            return null;
            }
        if(this.first === this.last){
            this.last = null;
        }    
           this.first = this.first.next;
            this.length--;
            return this;
       
    }
}