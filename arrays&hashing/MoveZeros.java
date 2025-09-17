class Solution {
    public void moveZeroes(int[] nums) {
        Queue<Integer> zeros = new LinkedList<>();
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                zeros.offer(i);
                continue;
            } else if (!zeros.isEmpty()) {
                int zeroIdx = zeros.peek();
                nums[zeroIdx] = nums[i];
                nums[i] = 0;
                zeros.offer(i);
                zeros.poll();
            }
        }
    }
}
