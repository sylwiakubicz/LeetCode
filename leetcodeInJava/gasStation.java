//przeszło testy
class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        if (Arrays.stream(gas).sum() < Arrays.stream(cost).sum()) {
            return -1;
        }
        int total = 0;
        int res = 0;
        for (int i = 0; i < gas.length; i++) {
            total += (gas[i] - cost[i]);

            if (total < 0) {
                total = 0;
                res = i + 1;
            }
        }

        return res;
    }
}s

// działa ale wolne, brute force
class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int n = gas.length;
        int total = 0;
        int j;
        
        for (int i = 0; i < n; i++) {
            total = gas[i] - cost[i];
            if (total < 0 || gas[i] == 0) continue;
            j = (i + 1) % n;

            while (j != i) {
                total += gas[j];
                total -= cost[j];
                if (total < 0) {
                    break;
                }
                j = (j + 1) % n;
            }
            
            if (j == i) {
                return i;
            }
        }
        
        return -1;
    }
}
