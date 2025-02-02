// optymalne rozwiązanie do analizy
var buildTree = function(preorder, inorder) {
    let preIdx = 0, inIdx = 0;
    
        function dfs(limit) {
            if (preIdx >= preorder.length) return null;
            if (inorder[inIdx] === limit) {
                inIdx++;
                return null;
            }
            
            let root = new TreeNode(preorder[preIdx++]);
            root.left = dfs(root.val);
            root.right = dfs(limit);
            return root;
        }
        
        return dfs(Infinity);
}


// mało optymalne rozwiązanie ale powiedzmy że to rozumiem
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null

    let root = new TreeNode(preorder[0])
    let mid = inorder.indexOf(preorder[0])
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0,mid))
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))
    return root

};
