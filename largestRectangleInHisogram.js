var largestRectangleArea = function(heights) {
    let stack = []
    let maxArea = 0
    
    for (let i = 0; i < heights.length; i++) {
        let start = i
        while (stack.length !== 0 && stack[stack.length - 1][1] > heights[i]) {
            [prevIndex, prevHeight] = stack.pop()
            start = prevIndex
            if (maxArea < (prevHeight * (i - prevIndex))) {
                maxArea = prevHeight * (i - prevIndex)
            }

        }

        stack.push([start, heights[i]])

    }

    while (stack.length !== 0) {
        [prevIndex, prevHeight] = stack.pop()
        if (maxArea < (prevHeight * (heights.length - prevIndex))) {
            maxArea = prevHeight * (heights.length - prevIndex)
        }
    }


    return maxArea
};


// rozwiązania innych bardziej optymalne ale imo mneij czytelne
var largestRectangleArea = function(heights) {
    let stack = [];
    let maxArea = 0;
    let n = heights.length;

    for (let i = 0; i <= n; i++) {
        let currentHeight = (i === n) ? 0 : heights[i];

        while (stack.length && heights[stack[stack.length - 1]] > currentHeight) {
            let height = heights[stack.pop()];
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i);
    }

    return maxArea;
};
