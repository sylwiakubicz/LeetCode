var search = function(nums, target) {

    let left = 0
    let right = nums.length - 1
    let middle = 0

    while (left <= right) {
        middle = Math.floor((left + right) / 2)

        if (nums[middle] === target) return middle

        if (nums[middle] >= nums[left]) {
            if (nums[middle] < target || nums[left] > target){
                left = middle + 1
            } else {
                right = middle - 1
            }

        } else {
            if (nums[middle] > target || nums[right] < target) {
                right = middle - 1
            } else {
                left = middle + 1
            }
        }
    }

    return -1
};
