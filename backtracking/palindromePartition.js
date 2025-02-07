var partition = function(s) {
    let res = []
    let subset = []
    dfs(0, s, [], res)
    return res
};

var dfs = function(i, s, subset, res) {
    if (i >= s.length) {
        res.push([...subset])
        return
    }

    for (let j = i; j < s.length; j++) {
        if (isPalindrome(s, i, j)) {
            subset.push(s.substring(i, j + 1))
            dfs(j + 1, s, subset, res)
            subset.pop()
        }
    }

}

var isPalindrome = function(s, i ,j) {
   
    while (i < j) {
        if (s[i] !== s[j]) {
            return false
        }
        i++
        j--
    }

    return true    
}
