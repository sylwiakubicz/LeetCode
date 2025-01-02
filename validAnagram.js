var isAnagram = function(s, t) {

    if (s.length != t.length) return false

    let sLetters = new Map()
    let tLetters = new Map()

    for  (let i = 0; i < s.length; i++) {
        sLetters.set(s[i], (sLetters.get(s[i]) || 0) + 1)
        tLetters.set(t[i], (tLetters.get(t[i]) || 0) + 1)
    }

    for (let [key, value] of sLetters) {
        if (!tLetters.has(key)) return false
        if (tLetters.get(key) != value) return false
    }

    return true
};
