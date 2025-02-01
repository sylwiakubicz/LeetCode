// działa ale nie jest najszybsza odpowiedzią (dodajemu nawet nody które są nullami)
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

// tutaj zanim dodamy node upewaniamy się że nie są nullami 
var levelOrder = function(root) {
    let res = new Array()
    if (root === null) return res

    let queue = [root]
    while (queue.length > 0) {
        let size = queue.length

        let temp = []
        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            temp.push(node.val)
            if (node.left !== null) queue.push(node.left)
            if (node.right !== null) queue.push(node.right)
        }

        if (temp.length > 0) res.push(temp)
    }

    return res

};
