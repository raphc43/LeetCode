// Solution is O(n)
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

var simplifyPath = function(s) {
    let stackObject = new StackStructure();
    let strArray = s.split("/").filter(item => item !== "");

    for (let i = 0; i < strArray.length; i++) {
        let current = strArray[i];

        if (current === ".") {
            continue;
        }

        if (current === "..") {
            if (stackObject.peek()) {
                stackObject.pop();
            }
        } else {
            stackObject.push(current);
        }
    }

    let result = [];
    while (stackObject.peek()) {
        result.push(stackObject.pop());
    }

    return "/" + result.reverse().join("/");
};


console.log(simplifyPath("/home/user/Documents/../Pictures"))
