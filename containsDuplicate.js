/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const uniqueItems = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (uniqueItems.get(nums[i])) {
            return true
        }
        uniqueItems.set(nums[i], 1)
    }

    return false
};
