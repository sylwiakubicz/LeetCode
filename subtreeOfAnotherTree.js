var isSubtree = function(root, subRoot) {
    if (subRoot === null) return true
    if (root === null) return false
    
    if (isSameTree(root, subRoot)) {
        return true
    } else {
        return isSubtree(root.left, subRoot) ||
        isSubtree(root.right, subRoot)
    }
};

var isSameTree = function(p, q) {

    if (p === null && q === null) {
        return true
    }
    if (p !== null && q !== null && p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(q.right, p.right)
    } 
    else {
        return false
    }
};
