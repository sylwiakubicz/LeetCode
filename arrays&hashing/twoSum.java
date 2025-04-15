class Solution {
    public int[] twoSum(int[] nums, int target) {
        int n = nums.length;
        HashMap<Integer, Integer> pairMap = new HashMap<>();
        int x;
        int[] res = new int[2];
        
        for (int i = 0; i < n; i++) {
            x = target - nums[i];
            if (pairMap.containsKey(x)) {
                res[0] = i;
                res[1] = pairMap.get(x);
                return res;
            }
            pairMap.put(nums[i], i);
        }
        return null;
    }
}
