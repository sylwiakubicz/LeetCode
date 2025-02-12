/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let resIdx = 0
    let resLen = 0

    for (let i = 0; i < s.length; i++) {
        //even
        let l = i
        let r = i + 1

        while (l >= 0 && r < s.length && s.charCodeAt(l) === s.charCodeAt(r)) {
            if (r - l + 1 > resLen) {
                resLen = r - l + 1
                resIdx = l
            }
            l--
            r++
        }

        //odd
        l = i
        r = i
        while(l >= 0 && r < s.length && s.charCodeAt(l) === s.charCodeAt(r)) {
            if (r - l + 1 > resLen) {
                resLen = r - l + 1
                resIdx = l
            }
            l--
            r++
        }

    }

    return s.substring(resIdx, resIdx + resLen)
};
