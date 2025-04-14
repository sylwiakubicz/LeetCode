/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return []

    const letterMap = createMap()

    let res = []
    const combination = (i, current) => {
        if (current.length === digits.length) {
            res.push(current.toString().replaceAll(",", ''))
            return
        }
        
        let options = letterMap.get(digits[i])
        for (let opt of options) {
            current.push(opt)
            combination(i + 1, current)
            current.pop()        
        }
    }

    combination(0, [])
    return res
};


var createMap = function() {
    const map = new Map()
    map.set("2", ['a', 'b', 'c'])
    map.set("3", ['d', 'e', 'f'])
    map.set("4", ['g', 'h', 'i'])
    map.set("5", ['j', 'k', 'l'])
    map.set("6", ['m', 'n', 'o'])
    map.set("7", ['p', 'q', 'r', 's'])
    map.set("8", ['t', 'u', 'v'])
    map.set("9", ['w', 'x', 'y', 'z'])
    return map
}
