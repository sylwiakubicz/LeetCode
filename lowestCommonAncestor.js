var lowestCommonAncestor = function(root, p, q) {
    if (root === null) return null
    if ((p.val <= root.val && q.val >= root.val) || (p.val >= root.val && q.val <= root.val)) return root

    if (p.val < root.val) {
        return lowestCommonAncestor(root.left, p, q)
    } else {
        return lowestCommonAncestor(root.right, p, q)
    }
};
