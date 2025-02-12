/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let counter = 0

    for (let i = 0; i < s.length; i++) {
        //odd
        let l = i
        let r = i
        while (l >= 0 && r < s.length && s.charCodeAt(l) === s.charCodeAt(r)) {
            counter++
            l--
            r++
        }

        //even
        l = i
        r = i + 1
        while (l >= 0 && r < s.length && s.charCodeAt(l) === s.charCodeAt(r)) {
            counter++
            l--
            r++
        }
    }

    return counter
};
