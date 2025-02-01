// dfs pre-order - moje rozwiązanie
var isSameTree = function(p, q) {
    let res = [true]
    dfs(p,q,res)
    return res[0]
};

var dfs = function(p,q,res) {
    if (p === null || q === null) {
        if (p !== null || q !== null) {
            res[0] = false
        } 
        return
    }

    if (p.val !== q.val) {
        res[0] = false
    }

    dfs(p.left, q.left, res)
    dfs(q.right, p.right, res)

    return 
}

