var lastStoneWeight = function(stones) {
    let heap = []
    for (let stone of stones) {
        insert(stone, heap)
    }

    while (heap.length > 1) {
        let stone1 = del(heap)
        let stone2 = del(heap)

        if (stone1 - stone2 === 0) {
            continue
        }

        insert(stone1 - stone2, heap)
    }

    return heap.length === 1 ? heap[0] : 0
};

var del = function(heap) {
    // zamiana 1 z ostanim
    let temp =  heap[0]
    heap[0] = heap[heap.length - 1]

    // usunięcie ostatniego 
    heap.pop()
    // naprawienie heap i zwrócenie usuniętej wartości potrzbenej do obliczeń
    heapify(heap, 0)
    return temp
}

var heapify = function(heap, i) {
    let left = getLeft(i)
    let right = getRight(i)
    let largest = i

    if (left < heap.length && heap[left] > heap[largest]) {
        largest = left
    }
    if (right < heap.length && heap[right] > heap[largest]) {
        largest = right
    }
    if (largest !== i) {
        temp = heap[i]
        heap[i] = heap[largest]
        heap[largest] = temp
        heapify(heap, largest)
    }
}

var insert = function(stone, heap) {
    heap.push(stone)
    let i = heap.length - 1

    while (i > 0 && heap[getParent(i)] < heap[i]) {
        let temp = heap[i]
        heap[i] = heap[getParent(i)]
        heap[getParent(i)] = temp
        i = getParent(i)
    }
}

var getParent = function(i) {
    return Math.floor(i / 2)
}

var getLeft = function(i) {
    return 2 * i
}

var getRight = function(i) {
    return 2 * i + 1
}

