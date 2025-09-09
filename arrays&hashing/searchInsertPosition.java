class Solution {
    public int searchInsert(int[] nums, int target) {
        int l = 0;
        int r = nums.length - 1;
        int mid = (l + r) / 2;

        if (target < nums[l]) {
            return 0;
        }

        if (target > nums[r]) {
            return nums.length;
        }

        while (l <= r) {
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }

            mid = (l + r) / 2;
        }

        return l;
    }
}
