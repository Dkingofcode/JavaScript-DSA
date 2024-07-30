// 10-->5-->16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class DoublyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this; 
    }

    prepend(value){
      const newNode = {
        value: value,
        next: null,
        prev: null
      }

      newNode.next = this.head; 
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
    }

    insert(index, value){
       
        const newNode = {
            value: value,
            next: null,
            prev: null
        }

        if(index === 0){
          this.prepend(value);
          return this.printList();
        }

        if(index >= this.length){
          return this.append(value);
        
        }

        
        let currentValue = this.head;
        for(let i = 0; i <= index - 1; i++){
            if(i === index - 1){
              let currentNext = currentValue.next;
              currentValue.next = newNode;
              newNode.prev = currentValue;
              newNode.next = currentNext;
              currentNext.prev = newNode;
              this.length++;
              return this.printList();
             }
            currentValue = currentValue.next;
        }
        
        return undefined;

    }

    remove(index){

        if(index >= this.length){
           return undefined;    
        }

        if(index === 0){
            let currentNode = this.head;
            this.head = currentNode.next;
        }
        
        let currentNode = this.head;
        for(let i = 0; i <= index - 1; i++){
            if(i === index - 1){
              let nodeTodelete = currentNode.next;
              currentNode.next = nodeTodelete.next;   
               this.length--;             
              return this.printList();
            }
            currentNode = currentNode.next;
        }

    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }

}

class LinkedList {
    constructor(value){
       this.head = {
         value: value,
         next: null
       }
       this.tail = this.head;
       this.length = 1;
    }

    append(value){
        // Code here
        if(value){
           const newNode = {
             value: value,
             next: null
           } 
           let current = newNode;
           this.tail.next = newNode;
           this.tail = current;
           this.length++;
           return this;
        }
    }

    prepend(value){
        const newNode = {
            value: value,
            next: this.head
        }
        let current = newNode;
        this.head = current;
        this.length++;
        return this;
    }

    insert(index, value){
       
        const newNode = {
            value: value,
            next: null
        }

        if(index === 0){
          this.prepend(value);
          return this.printList();
        }

        if(index >= this.length){
          return this.append(value);
        
        }

        
        let currentValue = this.head;
        for(let i = 0; i <= index - 1; i++){
            if(i === index - 1){
              let currentNext = currentValue.next;
              currentValue.next = newNode;
              newNode.next = currentNext;
              this.length++;
              return this.printList();
             }
            currentValue = currentValue.next;
        }
        
        return undefined;

    }

    remove(index){

        if(index >= this.length){
           return undefined;    
        }

        if(index === 0){
            let currentNode = this.head;
            this.head = currentNode.next;
        }
        
        let currentNode = this.head;
        for(let i = 0; i <= index - 1; i++){
            if(i === index - 1){
              let nodeTodelete = currentNode.next;
              currentNode.next = nodeTodelete.next;   
               this.length--;             
              return this.printList();
            }
            currentNode = currentNode.next;
        }

    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }



    reverse(){
        if(!this.head.next) {
            return this.head;
        }
        let current = this.head;
        this.tail = this.head;
        let nextNode = current.next;
       while(nextNode){
        const temp = nextNode.next;
        nextNode.next = current;
        current = nextNode;
        nextNode = temp;
      //  nextNode = current.next;
       }
       this.head.next = null;
       this.head = current;
       return this.printList();
    }
}


const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(4);
myLinkedList.insert(2, 20);
console.log(myLinkedList.printList());







