/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (root === null) return "N"

    let s = ""
    let queue = [root]
    while (queue.length > 0) {
        let node = queue.shift() 
        if (node === null) {
            s += "N,"
        } else {
            s += node.val + ","
            queue.push(node.left)
            queue.push(node.right)
        }
    }
    return s
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data === "N") return null
    
    let nodes = data.split(",") // Podział na tablicę
    let root = new TreeNode(parseInt(nodes[0])) // Pierwszy element to korzeń
    let queue = [root]
    let index = 1

    while (queue.length > 0 && index < nodes.length) {
        let node = queue.shift() 

        if (nodes[index] !== "N") {
            node.left = new TreeNode(parseInt(nodes[index])) // Parsowanie na liczbę
            queue.push(node.left)
        } 
        index++

        if (index < nodes.length && nodes[index] !== "N") {
            node.right = new TreeNode(parseInt(nodes[index])) // Parsowanie na liczbę
            queue.push(node.right)
        }
        index++
    }
     
    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
