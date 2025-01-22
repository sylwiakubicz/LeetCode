// wykorzystanie tablicy o stałej wartości
// mniej zajmowanej pamieci -> tablica a nie mapa z kluczem i wartością
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    let sCharsArray = new Array(26).fill(0)
    let tCharsArray = new Array(26).fill(0)

    for (let i = 0; i < s.length; i++) {
        sCharsArray[s.charCodeAt(i) - 97]++
        tCharsArray[t.charCodeAt(i) - 97]++
    }

    for (let i = 0; i <= 26; i++) {
        if (sCharsArray[i] !== tCharsArray[i]) return false
    }

    return true
};

// Działa sprawnie, dodajemy litery do hashmapy i póżniej porównujemy wartości między dwoma mapami
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
