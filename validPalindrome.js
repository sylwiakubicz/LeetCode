var isPalindrome = function(s) {
    let sConverted = ""
    sLowercase = s.toLowerCase()

    for (let char of sLowercase) {
        if ((char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) || (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57)) {
            sConverted += char
        }
    }

    if (!sConverted) return true

    let i = 0
    let j = sConverted.length - 1
    while (sConverted[i] === sConverted[j] && i < j) {
        i++
        j--
    }

    if (j - i === 0 || i - j === 1) {
        return true
    }

    return false
};
