class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> pascalRows = new ArrayList<>(numRows);
        pascalRows.add(new ArrayList<Integer>(Arrays.asList(1)));
        
        if (numRows >= 2) {
            pascalRows.add(new ArrayList<Integer>(Arrays.asList(1, 1)));
        }
        
        for (int i = 3; i <= numRows; i++) {
            List<Integer> currentRow = new ArrayList<>(i);
            List<Integer> previousRow = pascalRows.get(i - 2);
            currentRow.add(1);
            for (int j = 1; j < i - 1; j++) {
                currentRow.add(previousRow.get(j) + previousRow.get(j - 1));
            }
            currentRow.add(1);
            pascalRows.add(currentRow);
        }
        return pascalRows;
    }
}
