// przekazywanie każdej wartości w innej tablicy
var kthSmallest = function(root, k) {
    let cth = [0]
    let res = [0]
    dfs(root, k, cth, res)
    return res[0]
};

var dfs = function(root,k, cth,res) {
    if (root === null) return 

    dfs(root.left, k, cth, res) 
    cth[0]++
    if (cth[0] === k) {
        return root.val
    }
    dfs(root.right,k, cth, res) 
}


// uporządkowanie kodu
var kthSmallest = function(root, k) {
    let res = new Array(2)
    res[0] = k
    dfs(root, res)
    return res[1]
};

var dfs = function(root, res) {
    if (root === null) return 

    dfs(root.left, res)
    res[0]--
    if (res[0] === 0) {
        res[1] = root.val
        return
    }
    dfs(root.right,res)
}
