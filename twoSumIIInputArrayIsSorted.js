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

// wersja z binary search zamiast dodatkowej pętli while 
var twoSum = function(numbers, target) {
    
    for (let i = 0; i < numbers.length; i++) {
        let x = target - numbers[i]
        if (x < numbers[i]) continue

        let result = binarySearch(numbers, x, i)
        if (result === null) continue

        return [i + 1, result + 1]
    }

    return []
};

var binarySearch = function(array, target, currentI) {
    let left = 0
    let right = array.length - 1
    let middle = 0
    
    while (left <= right) {
        middle = Math.floor((right + left) / 2)

        if (array[middle] === target && middle !== currentI) return middle
        if (array[middle] <= target) {
            left = middle + 1
        }
        else {
            right = middle - 1
        }
    }

    return null
}
