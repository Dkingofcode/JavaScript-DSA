




const BreadthFirstSearch = (nums) => {
    
   let currentNode = this.root;
   let list = [];
   let queue = [];
   queue.push(currentNode);

   while(queue.length > 0){
     currentNode = queue.shift();
     list.push(currentNode.value);
     if(currentNode.left){
        queue.push(currentNode.left);
     }
     if(currentNode.right){
        queue.push(currentNode.right);
     }
   }

   return list;
}

let queue = [];
let list = [];

const RecursiveBFS = (queue, list) => {
   
   if(!queue.length){
      return list;
   }

   let currentNode = queue.shift();

   if(currentNode.left){
      queue.push(currentNode.left);
   }

   if(currentNode.right){
      queue.push(currentNode.right);
   }

   return RecursiveBFS(queue, list);
}


function traverseInOrder(node, list){
   if(node.left) {
      traverseInOrder(node.left, list);
   }
   list.push(node.value);

   if(node.right){
      traverseInOrder(node.right, list);
   }
   return list;
}

function traversePostOrder(node, list){
   if(node.left){
      traversePostOrder(node.left, list);
   }

   if(node.right){
      traversePostOrder(node.right, list);
   }

   list.push(node.value);
   return list;
}

function traversePreorder(node, list){
   list.push(node.value);
   
   if(node.left) {
      traversePreorder(node.left, list);
   }

   if(node.right){
      traversePreorder(node.right, list);
   }

   return list;
}


function DFSInorder(){
   return traverseInOrder(this.root, []);
}

function DFSPostOrder(){
  return traversePostOrder(this.root, []);
}

function DFSPreorder(){
  return traversePreorder(this.root, []);
}



//       9
//   4       20
// 1   6   15    170
//
//
//
//
//

