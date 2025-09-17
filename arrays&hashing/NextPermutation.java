class Solution {
    public void nextPermutation(int[] nums) {
        int l = nums.length - 1;
        int r = l - 1;
        
        // find the first decreasing element from the right of the list
        while (r >= 0) {
            if (nums[r] < nums[l]) {
                break;
            }
            r--;
            l--;
        }

        // find the smallest element from the right side that is greater than the first decreasing element
        int curMax = l;
        while (l < nums.length && r != -1) {
            if (nums[l] > nums[r] && nums[l] <= nums[curMax]) {
                curMax = l;
            }
            l++;
        }

        // swap these two elements if such exists
        if (r != -1 ) {
            int swap = nums[r];
            nums[r] = nums[curMax];
            nums[curMax] = swap;
        }
        
        
        // reverse right sublist
        r++;
        l = nums.length - 1;
        while (l >= r) {
            int temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            r++;
            l--;
        }


    }

}
