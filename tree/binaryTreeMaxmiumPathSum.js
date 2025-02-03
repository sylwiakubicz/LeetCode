var maxPathSum = function(root) {
    if (root === null) return 0
    if (root.left === null && root.right === null) return root.val
    
    let res = [Number.NEGATIVE_INFINITY]
    dfs(root, res)
    return res[0]
};

var dfs = function(root, res) {
    if (root === null) return 0

// pozbywamy się tym Math.max wartości ujemnych
    let left = Math.max(dfs(root.left, res), 0)
    let right = Math.max(dfs(root.right, res), 0)
    res[0] = Math.max(res[0], left + right + root.val)

    return Math.max(left, right) + root.val

}
