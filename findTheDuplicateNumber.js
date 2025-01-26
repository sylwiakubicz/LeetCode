// Floyd's algorym 
var findDuplicate = function(nums) {
    let slow = 0
    let fast = 0
    while (true) {
        slow = nums[slow]
        fast = nums[nums[fast]]
        if (slow === fast) {
            break
        }
    }

    let slow2 = 0
    while (true) {
        slow = nums[slow]
        slow2 = nums[slow2]
        if (slow === slow2) {
            return slow
        }
    }
}

// brute force
var findDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return nums[i]
        }
    }
};
