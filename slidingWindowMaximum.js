// działa poprawnie ale nie jest za bardzo optymalny
var maxSlidingWindow = function(nums, k) {
    let res = []
    let window;
    let currentMax = 0
    let l = 0
    
    for (let r = k - 1; r < nums.length; r++) {
        if (l !== 0 && nums[l - 1] !== currentMax) {
            currentMax = Math.max(currentMax, nums[r])
        } else {
            window = nums.slice(l, r + 1)
            currentMax = Math.max(...window)
        }
        res.push(currentMax)
        l++
    }

    return res
};
