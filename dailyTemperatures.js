var dailyTemperatures = function(temperatures) {
    let days = new Array(temperatures.length)
    let stack = []

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length !== 0 && stack[stack.length - 1][0] < temperatures[i]) {
            temp = stack.pop()
            tempIndex = temp[1]
            days[tempIndex] = i - tempIndex
        }

        stack.push([temperatures[i], i])
        days[i] = 0
    }

    return days
};
