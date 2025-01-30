// pre-order DFS 
// zamieniamy left z right i następnie przetwarzamy left dopóki nie bezie null i później right 

var invertTree = function(root) {
    if (root === null) return null

    let temp = root.left 
    root.left = root.right
    root.right = root.left
    
    invertTree(root.left)
    invertTree(root.right)
    return root
    
};


// post-order
var invertTree = function(root) {
    if (root === null) return null
   
    invertTree(root.left)
    invertTree(root.right)

    let temp = root.left 
    root.left = root.right
    root.right = temp

    return root
    
};
