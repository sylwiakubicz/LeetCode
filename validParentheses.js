var isValid = function(s) {
    let parentheses = new Array()

    for (let char of s) {
        if (char === "(" || char === "{" || char === "[") {
            parentheses.push(char)
            continue
        }

        let currentTop = parentheses[parentheses.length - 1]
        if (char === "}" && currentTop !== "{") {
            return false
        }
        if (char === ")" && currentTop !== "(") {
            return false
        }
        if (char === "]" && currentTop !== "[") {
            return false
        }

        parentheses.pop(currentTop)
    }

    if (parentheses.length !== 0) {
        return false
    }
    return true

};
