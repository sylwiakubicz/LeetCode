// działa ale tylko na testcase podczas tun -> na submit dostje runtime exceed -> DO OPTYMALIZACJI
var checkInclusion = function(s1, s2) {

    if (s1.length === 1) {
        for (let l = 0; l < s2.length; l++) {
            if (s2[l] === s1[0]) return true
        }
        return false
    }
    
    let s1CharMap = new Map()
    
    for (let letter of s1) {
        val = s1CharMap.get(letter)
        s1CharMap.set(letter, val ? val + 1 : 1)
    }


    let s2CharMap = new Map()
    let r;
    for (let l = 0; l < s2.length; l++) {
        r = l + 1
        s2CharMap.clear()

        // check first letter
        if (!s1CharMap.has(s2[l])) continue
        s2CharMap.set(s2[l], 1)
        
        // check letters between
        while (r < s2.length && r - l + 1 < s1.length && s1CharMap.has(s2[r])) {
            if (s2CharMap.has(s2[r]) && s2CharMap.get(s2[r]) >= s1CharMap.get(s2[r])) {
                break
            }
            val = s2CharMap.get(s2[r])
            s2CharMap.set(s2[r], val ? val + 1 : 1)
            r++
        }

        // check last letter
        if (!s1CharMap.has(s2[r]) || r - l + 1 !== s1.length || s2CharMap.get(s2[r]) >= s1CharMap.get(s2[r])) continue
        
        return true
    }


    return false
};
