var minEatingSpeed = function(piles, h) {
    let maxPile = Math.max(...piles)
    if (piles.length === h) return maxPile

    let left = 1
    let right = maxPile
    let middle = 0
    let result = 0
    let k = maxPile

    while (left <= right) {
        middle = Math.floor((left + right) / 2)
        result = 0

        for (let i = 0; i < piles.length; i++) {
            result += Math.ceil(piles[i] / middle)
        }

        if (k > middle && result <= h) {
            k = middle
        }

        if (result <= h) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }

    return k
};
