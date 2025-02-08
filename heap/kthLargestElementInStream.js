class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.kth = k;
        this.heap = [];
        
        // Wstawiamy elementy do kopca
        for (let num of nums) {
            this.add(num);
        }
    }

    insert(num) {
        this.heap.push(num);
        let i = this.heap.length - 1;

        while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {  // Min-heap
            [this.heap[this.parent(i)], this.heap[i]] = [this.heap[i], this.heap[this.parent(i)]];
            i = this.parent(i);
        }
    }

    parent(i) {
        return Math.floor((i - 1) / 2); // Poprawiony wzór na rodzica
    }

    removeMin() {
        if (this.heap.length === 0) return;
        if (this.heap.length === 1) return this.heap.pop();

        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);

        return min;
    }

    heapifyDown(i) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let smallest = i;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        if (smallest !== i) {
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            this.heapifyDown(smallest);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.insert(val);

        // Jeśli kopiec ma więcej niż k elementów, usuwamy najmniejszy
        if (this.heap.length > this.kth) {
            this.removeMin();
        }

        return this.heap[0]; // Najmniejszy element w kopcu to k-ty największy element
    }
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

