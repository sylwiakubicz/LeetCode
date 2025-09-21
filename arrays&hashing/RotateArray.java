class Solution {
    public void rotate(int[] nums, int k) {
        int n = nums.length;
        if (n == 0) return;
        k %= n;
        if (k == 0) return;

        int moved = 0;
        for (int start = 0; moved < n; start++) {
            int current = start;
            int prev = nums[current];
            do {
                int next = (current + k) % n;
                int temp = nums[next];
                nums[next] = prev;
                prev = temp;
                current = next;
                moved++;
            } while (current != start);
        }
    }
}


// better sollution
class Solution {
    public void rotate(int[] nums, int k) {
        int n = nums.length;
        k = k % n;

        reverse (nums, 0, n-1);
        reverse (nums, 0, k-1);
        reverse (nums, k, n-1);
    }
    private void reverse(int[] nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
}
