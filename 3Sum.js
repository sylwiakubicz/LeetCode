// moje rozwiazanie z dodatkową pamiecią

var threeSum = function(nums) {
    let solutions = new Map()
    let numsSorted = nums.sort((a, b) => a - b)
    
    let x, left, right;

    for (let i = 0; i < numsSorted.length; i++) {
        if (i > 0 && numsSorted[i] === numsSorted[i - 1]) continue
        
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
    let solutions = new Array()
    let numsSorted = nums.sort((a, b) => a - b)
    
    let x, left, right;

    for (let i = 0; i < numsSorted.length; i++) {
        if (i > 0 && numsSorted[i] === numsSorted[i - 1]) continue
        
        right = numsSorted.length - 1
        left = i + 1
        x = 0 - numsSorted[i]
        while (left < right) {
            sum = numsSorted[left] + numsSorted[right] 
            
            if (sum === x) {
                currentSolution = [numsSorted[i], numsSorted[left], numsSorted[right]]
                solutions.push(currentSolution)

                while(left < right && numsSorted[left] === numsSorted[left + 1]) left++
                while(left < right && numsSorted[right] === numsSorted[right - 1]) right--

                right--
                left++

            } else if (sum > x) {
                right--
            } else {
                left++
            }
        }
    }

    return solutions
}

