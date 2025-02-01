// bardzo wolne ale działa
var levelOrder = function(root) {
    let res = new Array()
    let queue = [root]

    while (queue.length > 0) {
        let size = queue.length

        let temp = []
        for (let i = 0; i < size; i++) {
            node = queue.pop()
            if (node !== null) {
                queue.unshift(node.left)
                queue.unshift(node.right)
                temp.push(node.val)
            }
        }

        if (temp.length > 0) res.push(temp)
    }

    return res

};
