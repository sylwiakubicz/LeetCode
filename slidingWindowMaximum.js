// O(n) 
var maxSlidingWindow = function(nums, k) {
    let n = nums.length
    let output = []
    let q = new Deque()
    let l = 0
    let r = 0

    while (r < n) {
        while (q.size() && nums[q.back()] < nums[r]) {
            q.popBack()
        }
        q.pushBack(r)

        if (l > q.front()) {
            q.popFront()
        }

        if ((r + 1) >= k) {
            output[l] = nums[q.front()]
            l++
        }
        r++
    }   
    return output
};

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
