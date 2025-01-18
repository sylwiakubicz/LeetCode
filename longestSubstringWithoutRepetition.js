var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0
    
    let longestSubstring = 0
    let chars = new Map()
    chars.set(s[0], 0)
    
    let l = 0
    let r = 1

    while (r < s.length) {

        if (chars.has(s[r])) {
            longestSubstring = Math.max(chars.size, longestSubstring)
            idx = chars.get(s[r])
            
            while (l <= idx) {
                chars.delete(s[l])
                l++
            }

            if (chars.has(s[l], l)) continue
            chars.set(s[l], l)

        } else {
            chars.set(s[r], r)
        }
        
        r++
    }

    longestSubstring = Math.max(chars.size, longestSubstring)
    return longestSubstring
};
