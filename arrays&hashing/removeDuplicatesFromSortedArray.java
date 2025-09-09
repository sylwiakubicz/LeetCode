class Solution {
    public int removeDuplicates(int[] nums) {
        int uniqueElements = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i != 0 && nums[i] == nums[i - 1]) {
                continue;
            } 
            nums[uniqueElements] = nums[i];
            uniqueElements++;
        }
        return uniqueElements;
    }
}
