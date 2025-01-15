// O(n+m) sollution
var findMedianSortedArrays = function(nums1, nums2) {
    let left = 0
    let right = 0

    let nums = []
    let mergedSize = nums1.length + nums2.length 
    let medianIndeks = Math.floor(mergedSize / 2)

    if (nums1.length === 0) {
        return mergedSize % 2 === 0 ? (nums2[medianIndeks - 1] + nums2[medianIndeks]) / 2 : nums2[medianIndeks]
    } 
    if (nums2.length === 0) {
        return mergedSize % 2 === 0 ? (nums1[medianIndeks - 1] + nums1[medianIndeks]) / 2 : nums1[medianIndeks]
    }

    while (nums.length - 1 !== medianIndeks) {
        
        if (nums1[left] <= nums2[right] || right >= nums2.length && left < nums1.length) {
            nums.push(nums1[left])
            left++
        } else if (right < nums2.length) {
            nums.push(nums2[right])
            right++
        }
    }

    if (mergedSize % 2 !== 0) {
        return nums[nums.length - 1]
    } else {
        return (nums[nums.length - 1] + nums[nums.length - 2]) / 2
    }
};
