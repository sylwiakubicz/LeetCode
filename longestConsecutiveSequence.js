var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0

    let set = new Set()
    let maxSequence = 0

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) continue
        set.add(nums[i])
    }

    for (let val of set) {
        let i = 1
        let count = 1
        while (set.has(val - i)) {
            set.delete(val - i)
            count++
            i++
        }
        let j = 1
        while (set.has(val + j)) {
            set.delete(val + j)
            count++
            j++
        }
        if (maxSequence < count) maxSequence = count
    }
    return maxSequence
};
