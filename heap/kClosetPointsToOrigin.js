var kClosest = function(points, k) {
    const heap = []
    for (let point of points) {
        let dist = calcDistance(point[0], point[1])
        insert(heap, point, dist)
    }

    while (heap.length > k) {
        del(heap)
    }

    return heap.map(heap => heap[0])

};

var insert = function(heap, point, distance) {
    heap.push([point, distance])
    let i = heap.length - 1
    let parent = Math.floor(i / 2)

    while (i > 0 && heap[parent][1] < heap[i][1]) {
        let temp = heap[i]
        heap[i] = heap[parent]
        heap[parent] = temp
        i = parent
        parent = Math.floor(i / 2);
    }
}

var calcDistance = function(x,y) {
    return Math.sqrt(x*x + y*y)
}

var del = function(heap) {
    heap[0] = heap[heap.length - 1]
    heap.pop()
    heapify(heap, 0)
}

var heapify = function(heap, i) {
    let left = 2 * i
    let right = 2 * i + 1
    largest = i

    if (left < heap.length && heap[left][1] > heap[largest][1]) {
        largest = left
    }
    if (right < heap.length && heap[right][1] > heap[largest][1]) {
        largest = right
    }
    if (largest !== i) {
        let temp = heap[largest]
        heap[largest] = heap[i]
        heap[i] = temp
        heapify(heap, largest)
    }
}
