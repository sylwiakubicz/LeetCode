
var MedianFinder = function() {
    this.rightHeap = [] // prawa część, większe od mediany, prawa strona musi maleć do góry czyli rosnąć w dół - oddalamy się od mediany
    this.leftHeap = [] // lewa część, mniejsze od mediany, lewa strona musi rosnąć do góry - zbliżamy się do mediany
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.rightHeap.length === 0 || num > this.rightHeap[0]) {
        insertToRight(this.rightHeap, num)
    } else {
        insertToLeft(this.leftHeap, num)
    }

    if (this.rightHeap.length > this.leftHeap.length + 1) {
        insertToLeft(this.leftHeap, del(this.rightHeap, true))
    } else if (this.leftHeap.length > this.rightHeap.length + 1) {
        insertToRight(this.rightHeap, del(this.leftHeap, false))
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.leftHeap.length > this.rightHeap.length) {
        return this.leftHeap[0]
    } else if (this.rightHeap.length > this.leftHeap.length) {
        return this.rightHeap[0]
    }

    return (this.rightHeap[0] + this.leftHeap[0]) / 2
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

 
var insertToRight = function(heap, num) {
    // min
    heap.push(num)
    let i = heap.length - 1
    let parent = Math.floor(i / 2)

    while (i > 0 && heap[parent] > heap[i]) {
        let temp = heap[i]
        heap[i] = heap[parent]
        heap[parent] = temp
        i = parent
        parent = Math.floor(i / 2)
    }
}

var insertToLeft = function(heap, num) {
    // max
    heap.push(num)
    let i = heap.length - 1
    let parent = Math.floor(i / 2)
    
    while (i > 0 && heap[parent] < heap[i]) {
        let temp = heap[i]
        heap[i] = heap[parent]
        heap[parent] = temp
        i = parent
        parent = Math.floor(i / 2)
    }
}

var del = function(heap, min) {
    let temp = heap[0]
    heap[0] = heap[heap.length - 1]
    heap.pop()
    if (min) {
        heapifyMin(heap, 0)
    } else {
        heapifyMax(heap, 0)
    }
    return temp
}


var heapifyMin = function(heap, i) {
    let left = 2 * i
    let right = left + 1
    let smallest = i

    if (left < heap.length && heap[left] < heap[smallest]) {
        smallest = left
    }
    if (right < heap.length && heap[right] < heap[smallest]) {
        smallest = right
    }
    if (smallest !== i) {
        let temp = heap[i]
        heap[i] = heap[smallest]
        heap[smallest] = temp
        heapifyMin(heap, smallest)
    }
}

var heapifyMax = function(heap, i) {
    let left = 2 * i
    let right = left + 1
    let largest = i

    if (left < heap.length && heap[left] > heap[largest]) {
        largest = left
    }
    if (right < heap.length && heap[right] > heap[largest]) {
        largest = right
    }
    if (largest !== i) {
        let temp = heap[i]
        heap[i] = heap[largest]
        heap[largest] = temp
        heapifyMax(heap, largest)
    }
}
