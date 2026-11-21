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
        this.top = null;
        this.size = 0;
    }

    push(data) {
        let node = new Node(data);
        if (this.top) {
        	node.next = this.top;
        	this.top = node;
        } else {
        	this.top = node;
        }

        this.size += 1;
    }

    pop() {
        if (this.top){ 
        	let data = this.top.data
            this.size -= 1
            if (this.top.next) {
            	this.top = this.top.next 
            } else {
             	this.top = null
            } 
            return data
                     
       	} else {
        	return null
        }                        
    }

    peek() {
    	if (this.top) return this.top;
    	return null;
    }
}

var isValid = function(s) {
    let stackObject = new StackStructure()
    let didPush = false; // did push 1 time atleast
    strArray = s.split("")

    for (i=0; i<strArray.length; i++) {
        if ( strArray[i].includes('(') ||  strArray[i].includes('{') || strArray[i].includes('[') ) {
            stackObject.push(strArray[i]);
            didPush = true;
            strArray[i] = " ";
        }

        if ( stackObject.peek() && stackObject.peek()["data"] == "(" && strArray[i].includes(')')  ) {
            stackObject.pop()
            strArray[i] = " ";
        } else if ( stackObject.peek() && stackObject.peek()["data"] == "{" && strArray[i].includes('}')  ) {
            stackObject.pop()
            strArray[i] = " ";

        } else if ( stackObject.peek() && stackObject.peek()["data"] == "[" && strArray[i].includes(']')  ) {
            stackObject.pop()
            strArray[i] = " ";
        }

    }

    // Handling special case
    if ( strArray.includes(")") || strArray.includes("}") || strArray.includes("]")) {
        return false
    }

    if (!didPush) return false

    if (stackObject.peek() == null) return true;

    return false;    
    
};


console.log(isValid(")(){}"))