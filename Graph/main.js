// Edge List

const graph = [[0, 2], [2, 3], [2, 1], [1, 3]];


// Adjacency List
const grklaph = [[2], [2, 3], [0, 1, 3], [1, 2]];



// Adjacency Matrix
const grroaphh = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]


class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacencyList = {};
    }

    addVertex(node){
       const newNode = {
           node: node,
           neighbours: null
       }
       let index = 0;
       if(!this.adjacencyList){
        this.adjacencyList[index] = newNode;
       }

       while(this.adjacencyList[index] !== null){
         index++;
       }

       this.adjacencyList[index] = newNode;

       this.numberOfNodes++;

    }

    addEdge(node1, node2){
        // undirected Graph
       
        if(node1 && node2){
            this.adjacencyList[node1] = this.adjacencyList[node2];
            this.adjacencyList[node2] = this.adjacencyList[node1];
        }
    }

    showConnections() {
      while(this.adjacencyList !== null){
        let index = 0;
        return this.adjacencyList[index++];
      }
    }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('3', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.showConnections();





