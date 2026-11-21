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
    let stackObject = new StackStructure()
    let strArray = s.split("/").filter(item => item != "")
    let finalArray = [];


    for (i=0; i<strArray.length; i++) {
        stackObject.push(strArray[i])
        finalArray.push(strArray[i])
        let condition = (stackObject.peek() && stackObject.peek()["data"] != ".") || (!stackObject.peek())

        if ( strArray[i] == '.' ) {
            stackObject.pop() 
            finalArray.pop()
        } else if (strArray[i] == '..') {
            stackObject.pop()
            stackObject.pop()

            finalArray.pop()
            finalArray.pop()

        }


    }

    return "/" + finalArray.join("/");
    
};


console.log(simplifyPath("/home/user/Documents/../Pictures"))
