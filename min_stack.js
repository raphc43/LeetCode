// Solution is O(n), however all four individual functions are constant i.e O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
 class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.min = null;
    }
 }

class MinStack {
    constructor() {
        this.topElement = null;
        this.size = 0;
    }

    push(data) {
        let node = new Node(data);
        if (this.topElement) {
        	node.next = this.topElement;
        	this.topElement = node;

            // Updating min
            this.topElement.min = this.topElement.data <= node.next.min ? this.topElement.data : node.next.min


        } else {
        	this.topElement = node;
            this.topElement.min = this.topElement.data
        }

        this.size += 1;
    }

    pop() {
        if (this.topElement){ 
        	let data = this.topElement.data
            this.size -= 1
            if (this.topElement.next) {
            	this.topElement = this.topElement.next 

            } else {
             	this.topElement = null
            } 
            return data
                     
       	} else {
        	return null
        }                        
    }

    top() {
    	if (this.topElement) return this.topElement.data;
    	return null;
    }

    getMin() {
        if (this.topElement) return this.topElement.min;
        return null;
    }
}

const minStack = new MinStack();

const operations = [
    "MinStack", "push", "push", "push", "getMin",
    "pop", "getMin", "pop", "getMin", "pop",
    "push", "push", "push", "getMin", "pop",
    "top", "getMin", "pop", "getMin", "pop"
];

const values = [
    [], [0], [1], [0], [],
    [], [], [], [], [],
    [-2], [-1], [-2], [], [],
    [], [], [], [], []
];

const output = [];

for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];

    if (operation === "MinStack") {
        output.push(null);
        continue;
    }

    if (operation === "push") {
        minStack.push(values[i][0]);
        output.push(null);
    } else {
        const result = minStack[operation]();
        output.push(result === undefined ? null : result ?? null);
    }
}

console.log(output);
