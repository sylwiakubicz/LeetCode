// Z wykorzysataniem two pinters ale tutaj mamy praktycznie o(n2) bo za każdym razem musimy resetować j
var twoSum = function(numbers, target) {

    for (let i = 0; i < numbers.length; i++) {
        let j = numbers.length - 1

        let x = target - numbers[i]
        if (x < numbers[i]) continue

        while (numbers[j] >= x) {
            if (numbers[j] === x) return [i + 1, j + 1]
            j--
        }
    }

    return []
};
