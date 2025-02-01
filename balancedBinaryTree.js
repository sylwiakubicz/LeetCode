var isBalanced = function(root) {
    let res = [true]
    dfs(root, res)
    return res[0]
};

var dfs = function(root, res) {
    if (root === null) return 0

    let left = dfs(root.left, res)
    let right = dfs(root.right, res)

    if (Math.abs(right - left) > 1) {
        res[0] = false
    }

    return Math.max(left, right) + 1
}
