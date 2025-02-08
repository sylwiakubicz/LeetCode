var findKthLargest = function(nums, k) {
    let heap = []
    let res = []

    for (let num of nums) {
        insert(heap, num)
        if (heap.length > k) {
            del(heap)
        }
    }

    return heap[0]
};

var insert = function(heap, num) {
    heap.push(num)
    let i = heap.length - 1
    let parent = Math.floor(i / 2)

    while (i > 0 && heap[i] < heap[parent]) {
        let temp = heap[parent]
        heap[parent] = heap[i]
        heap[i] = temp
        i = parent
        parent = Math.floor(i / 2)
    }

}

var del = function(heap) {
    heap[0] = heap[heap.length - 1]
    heap.pop()
    heapify(heap, 0)
}

var heapify = function(heap, i) {
    let left = 2 * i
    let right = left + 1
    smallest = i

    if (left < heap.length && heap[left] < heap[smallest]) {
        smallest = left
    }
    if (right < heap.length && heap[right] < heap[smallest]){
        smallest = right
    }
    if (smallest !== i) {
        let temp = heap[smallest]
        heap[smallest] = heap[i]
        heap[i] = temp
        heapify(heap, smallest)
    }
}
