class Solution {
    public int removeElement(int[] nums, int val) {
        int l = nums.length - 1;
        int r = 0;
        while(r <= l) {
            if (nums[r] == val) {
                while (nums[l] == val && l > r) {
                    l--;
                }

                nums[r] = nums[l];
                nums[l] = val;
                l--;
            }
            r++;
        }

        return l + 1;
    }
}
