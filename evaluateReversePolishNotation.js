// trochę brzydka zapisowo notacja
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    let numbers = new Array()

    for (let i = 0; i < tokens.length; i++) {
        let num = parseInt(tokens[i])

        if (num || num === 0) {
            numbers.push(num)
            continue
        }
        
        let a = numbers.pop(numbers.length - 1)
        let b = numbers.pop(numbers.length - 1)
        let operation = tokens[i]
        let result = calculate(a,b,operation)
                
        numbers.push(result)
    }

    return numbers[0]
};

var calculate = function(a,b,operation) {
    let result;
    switch (operation) {
        case "+": 
            result = b + a
            break
        case "-": 
            result = b - a
            break
        case "*":
            result = b * a
            break
        case "/":
            result = (b / a) < 0 ? Math.ceil(b / a) : Math.floor(b / a)
            break
    }
    return result
}

// ładniejszy zapis tego samego

var evalRPN = function(tokens) {

    let numbers = []

    for (let char of tokens) {

        if (char === "+") {
            a = numbers.pop()
            b = numbers.pop()
            numbers.push(a + b)
        }
        else if (char === "-") {
            a = numbers.pop()
            b = numbers.pop()
            numbers.push(b - a)
        }
        else if (char === "*") {
            a = numbers.pop()
            b = numbers.pop()
            numbers.push(b * a)
        }
        else if (char === "/") {
            a = numbers.pop()
            b = numbers.pop()
            result = (b / a) < 0 ? Math.ceil(b / a) : Math.floor(b / a)
            numbers.push(result)
        }
        else {
            numbers.push(parseInt(char))
        }
    }
    return numbers.pop()
};
