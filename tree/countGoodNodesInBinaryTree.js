var goodNodes = function(root) {
    let x = [0]
    if (root === null) return x[0]
    return validate(root, root.val, x)
};

var validate = function(root, min, x) {
    if (root === null) return 

    if (root.val >= min) {
        min = root.val
        x[0]++
    }

    validate(root.left, min, x)
    validate(root.right, min, x)
    return x[0]
}
