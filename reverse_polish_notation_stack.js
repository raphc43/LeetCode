// Solution is O(n), however all four individual functions are constant i.e O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
 class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
 }

class StackStructure {
    constructor() {
        this.topElement = null;
        this.size = 0;
    }

    push(data) {
        let node = new Node(data);
        if (this.topElement) {
        	node.next = this.topElement;
        	this.topElement = node;


        } else {
        	this.topElement = node;
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

}


var evalRPN = function(tokens) {
    if (tokens.length == 1) return Number(tokens[0]);

    let stackObject = new StackStructure()

    for (let i=0; i<tokens.length; i++) {
        if (tokens[i] == "+" || tokens[i] == "-" || tokens[i] == "*" || tokens[i] == "/") {
            let value1 = stackObject.pop()
            let value2 = stackObject.pop()
            let computedValue = eval(`${value2} ${tokens[i]} ${value1}`)

            stackObject.push( Math.trunc(computedValue) )

        
        } else {
            stackObject.push(tokens[i]);
        }

    }
    
    if (stackObject.size == 1) return stackObject.topElement.data;


};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
