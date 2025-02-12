/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]

    // ucinamy tablice tak, żeby zapobiec cyklowi
    return Math.max(helper(nums.slice(1)), helper(nums.slice(0, -1)))
};

var helper = function(nums) {
    let money = new Array(nums.length)

    money[0] = nums[0] 
    money[1] = Math.max(nums[1], money[0])

    for (let i = 2; i < nums.length; i++) {
        money[i] = Math.max(nums[i] + money[i - 2], money[i - 1])
    }
    return money[nums.length - 1]
}
