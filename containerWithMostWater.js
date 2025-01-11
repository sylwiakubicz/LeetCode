var maxArea = function(height) {
    let maxArea = 0
    let currentArea = 0
    let i = 0
    let j = height.length - 1

    while (j > i) {
        if (height[i] > height[j]) {
            currentArea = height[j] * (j - i)
            j--
        } else {
            currentArea = height[i] * (j - i)
            i++
        }

        if (currentArea > maxArea) {
            maxArea = currentArea
        }
    }
    return maxArea
};
