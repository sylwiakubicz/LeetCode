// moje rozwiazanie z dodatkową pamiecią

var threeSum = function(nums) {
    let solutions = new Map()
    let numsSorted = nums.sort((a, b) => a - b)
    
    let x, left, right;

    for (let i = 0; i < numsSorted.length; i++) {
        if (i > 1 && numsSorted[i] === numsSorted[i - 1]) continue
        
        right = numsSorted.length - 1
        left = i + 1
        
        x = 0 - numsSorted[i]
        while (left < right) {
            sum = numsSorted[left] + numsSorted[right]
            
            if (sum === x) {
                currentSolution = [numsSorted[i], numsSorted[left], numsSorted[right]]
                
                if (solutions.has(currentSolution.toString())) {
                    right--
                    continue
                }
                
                solutions.set(currentSolution.toString() ,currentSolution)
                right--

            } else if (sum > x) {
                right--
            } else {
                left++
            }
        }
    }

    return Array.from(solutions.values())
}

// rozwiązanie bez sprawdzania już dodanych opcji

var threeSum = function(nums) {
    const numsSort = [...nums].sort((a,b) => a-b);
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && numsSort[i] === numsSort[i - 1]) continue;

        let left = i + 1;
        let right = numsSort.length - 1;

        while(left < right) {
            const summ = numsSort[i] + numsSort[left] + numsSort[right];

            if (summ === 0) {
                result.push([numsSort[i], numsSort[left], numsSort[right]]);

                while (left < right && numsSort[left] === numsSort[left + 1]) left++;
                while (left < right && numsSort[right] === numsSort[right - 1]) right--;

                left++;
                right--;
            } else if (summ > 0) {
                right--;
            } else {
                left++;
            }
        }

    }

    return result;
};
