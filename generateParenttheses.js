
var generateParenthesis = function(n) {
    let strings = []
    let stack = []

    function backtrack(opened, closed) {
        if (n === opened && opened === closed) {
            strings.push(stack.join(""))
            return
        }

        if (opened < n) {
            stack.push("(")
            backtrack(opened + 1, closed)
            stack.pop()
        }

        if (closed < opened) {
            stack.push(")")
            backtrack(opened, closed + 1)
            stack.pop()
        }
    }

    backtrack(0,0)

    return strings
};

