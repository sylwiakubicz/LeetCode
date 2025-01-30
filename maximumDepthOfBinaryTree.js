// dfs recursive

var maxDepth = function(root) {
    if (root === null) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};


// bfs

var maxDepth = function(root) {
    if (root === null) return 0
    
    let result = 0
    let queue = [root] 
    while (queue.length > 0) {
        let size = queue.length
        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            if (node.left !== null) {
                queue.push(node.left)
            }
            if (node.right !== null) {
                queue.push(node.right)
            }
        }
        result++
    }

    return result
};
