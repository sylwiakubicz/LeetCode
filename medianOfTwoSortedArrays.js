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


// O(log (n + m) sollution 

var findMedianSortedArrays = function(nums1, nums2) {
    let A = nums1;
        let B = nums2;
        const total = A.length + B.length;
        const half = Math.floor((total + 1) / 2);

        if (B.length < A.length) {
            [A, B] = [B, A];
        }

        let l = 0;
        let r = A.length;
        while (l <= r) {
            const i = Math.floor((l + r) / 2);
            const j = half - i;

            const Aleft = i > 0 ? A[i - 1] : Number.MIN_SAFE_INTEGER;
            const Aright = i < A.length ? A[i] : Number.MAX_SAFE_INTEGER;
            const Bleft = j > 0 ? B[j - 1] : Number.MIN_SAFE_INTEGER;
            const Bright = j < B.length ? B[j] : Number.MAX_SAFE_INTEGER;

            if (Aleft <= Bright && Bleft <= Aright) {
                if (total % 2 !== 0) {
                    return Math.max(Aleft, Bleft);
                }
                return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
            } else if (Aleft > Bright) {
                r = i - 1;
            } else {
                l = i + 1;
            }
        }
        return -1;
    }

