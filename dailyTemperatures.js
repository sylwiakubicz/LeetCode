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


// rozwiązania bardziej optymalne przechowywanie tylko indeksów, nie musimy trzymać całej tabeli z temperaturami

var dailyTemperatures = function(temperatures) {
    let arrLength = temperatures.length;
    let outputArr = new Array(arrLength).fill(0);
    let helperArr = [];
    for (let i= arrLength-1; i>=0; i--){
      while(helperArr.length && temperatures[i] >= temperatures[helperArr[helperArr.length-1]]) {
            helperArr.pop();
      }

      if(helperArr.length){
        outputArr[i] = helperArr[helperArr.length-1] - i;
      }

      helperArr.push(i);
    }

    return outputArr;
};
