
var twoSum = function(nums, target) {
    const n = nums.length
    let pairMap = new Map()
    for (let i = 0; i < n; i++) {
        let x = target - nums[i]
        if (pairMap.has(x)) {
            return [i, pairMap.get(x)]
        }
        pairMap.set(nums[i], i)
    }
};
