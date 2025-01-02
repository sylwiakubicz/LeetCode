
var groupAnagrams = function(strs) {

    let anagrams = new Map()
    
    for (let i = 0; i < strs.length; i++) {
        let key = Array.from(strs[i]).sort().join('')
        if (anagrams.has(key)) {
            let newVal = anagrams.get(key).push(strs[i])
            continue
        }
        anagrams.set(key, [strs[i]])
    }
    return Array.from(anagrams.values());
};
