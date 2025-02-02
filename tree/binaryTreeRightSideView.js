var rightSideView = function(root) {
    let res = new Array()
    if (root === null) return res

    let q = []
    q.push(root)

    while (q.length > 0) {
        let size = q.length
        let temp = 0

        for (let i = 0; i < size; i++) {
            let node = q.shift()
            temp = node.val
            if (node.left !== null) q.push(node.left)
            if (node.right !== null) q.push(node.right)
        }
        res.push(temp)
    }

    return res
};
