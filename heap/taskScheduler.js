
var leastInterval = function(tasks, n) {
    if (n === 0) return tasks.length

    let array = new Array(26).fill(0)
    for (let task of tasks) {
        let idx = task.charCodeAt(0) - 65
        array[idx]++
    }          

    let heap = []
    for (let i = 0; i < 26; i++) {
        if(array[i] > 0) {
            insert(heap, [array[i], i])
        }
    }

    let q = []
    let time = 0
    while (q.length > 0 || heap.length > 0) {
        time++

        if (heap.length > 0) {
            let cur = del(heap) 
            if (cur[0] - 1 !== 0) {
                cur[0]--
                q.push([cur, time + n])
            }
        }

        if (q.length > 0 && q[0][1] === time) {
            insert(heap, q.shift()[0])
        }
    }

    return time

};


var insert = function(heap, val) {
    heap.push(val)
    let i = heap.length - 1
    let parent = Math.floor(i / 2)

    while (i > 0 && heap[i][0] > heap[parent][0]) {
        let temp = heap[i]
        heap[i] = heap[parent]
        heap[parent] = temp
        i = parent
        parent = Math.floor(i / 2)
    }
}


var del = function(heap) {
    let temp = heap[0]
    heap[0] = heap[heap.length - 1]
    heap.pop()
    heapify(heap, 0)
    return temp
}

var heapify = function(heap, i) {
    let left = i * 2
    let right = left + 1
    let largest = i

    if (left < heap.length && heap[left][0] > heap[largest][0]) {
        largest = left
    }
    if (right < heap.length && heap[right][0] > heap[largest][0]) {
        largest = right
    }
    if (largest !== i) {
        let temp = heap[i]
        heap[i] = heap[largest]
        heap[largest] = temp
        heapify(heap, largest)
    }
}
