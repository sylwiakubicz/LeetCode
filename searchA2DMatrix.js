var searchMatrix = function(matrix, target) {
    let left = 0
    let right = matrix.length - 1
    let middle = 0
    let currentRow;

    while (left <= right) {
        middle = Math.floor((left + right) / 2)
        currentRow = matrix[middle]
        if (currentRow[0] === target || currentRow[currentRow.length - 1] === target) return true
        
        if (currentRow[0] < target && currentRow[currentRow.length - 1] > target) {
            l = 0
            r = currentRow.length - 1
            let m = 0

            while (l <= r) {
                m = Math.floor((l + r) / 2) 
                
                if (currentRow[m] === target) return true
                
                if (currentRow[m] > target) {
                    r = m - 1
                } else {
                    l = m + 1
                }
            }
        }

        if (matrix[middle][0] > target) {
            right = middle - 1
        }
        if (matrix[middle][0] < target) {
            left = middle + 1
        }
    }
    return false
};
