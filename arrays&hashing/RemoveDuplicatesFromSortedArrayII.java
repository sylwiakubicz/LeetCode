// first sollution
class Solution {
    public int removeDuplicates(int[] nums) {
        int uqEl = 0;
        boolean once = true;
        for (int i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                if (once) {
                    once = false;
                    nums[uqEl] = nums[i];
                    uqEl++;
                }
                continue;
            }
            nums[uqEl] = nums[i];
            uqEl++;
            once = true;
        }
        return uqEl;
    }
}
// more optimal sollution
class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length <= 2) {
            return nums.length;
        }
        int k = 2;
        for (int i = 2; i < nums.length; i++) {
            if (nums[i] != nums[k - 2]) {
                nums[k] = nums[i];
                k++;
            }
        }
        return k;
    }
}
