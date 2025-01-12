// O(n) memory 
var trap = function(height) {
    let maxRight = []
    let maxLeft = []
    let currentRightMax = 0
    let currentLeftMax = 0
    let result = 0

    for (let i = 0; i < height.length; i++) {
        maxLeft[i] = currentLeftMax
        if (currentLeftMax < height[i]) currentLeftMax = height[i]
    }

    for (let i = height.length - 1; i >= 0; i--) {
        maxRight[i] = currentRightMax
        if (currentRightMax < height[i]) currentRightMax = height[i]
    }

    for (let i = 0; i < height.length; i++) {
        amountOfWater = (Math.min(maxRight[i], maxLeft[i]) - height[i])
        if (amountOfWater < 0) continue
        result += amountOfWater
    }

    return result
};

// O(1) memory
