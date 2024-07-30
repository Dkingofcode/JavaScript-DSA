class Stack {
    constructor(){
        this.top = null,
        this.bottom = null,
        this.length = 0;
    }

    peek(){
      return this.top;
    }

    enqueue(value){
       const newNode = {
          value: value,
          next: null
       }

      if(!this.top){
        this.top = newNode;
        this.bottom = newNode;  
      }

      this.bottom.next = newNode;
      this.bottom = newNode;
      return this;
    }

    dequeue(){
      if(!this.top){
         return null;
      }

      if(this.bottom === this.top){
        this.bottom = null;
      }
      this.top = this.top.next;
      return this;
    }
}