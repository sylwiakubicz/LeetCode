var Twitter = function() {
    this.count = 0
    this.tweetMap = new Map()
    this.followMap = new Map()
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if (!this.tweetMap.has(userId)) {
        this.tweetMap.set(userId, new Set())
    }
    this.tweetMap.get(userId).add([this.count, tweetId])
    this.count++
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    const res = []
    const heap = []

    if (!this.followMap.has(userId)) {
        this.followMap.set(userId, new Set());
    }

    const followees = Array.from(this.followMap.get(userId));
    followees.push(userId);

    for (let followee of followees) {
        if (this.tweetMap.has(followee)) {
            this.tweetMap.get(followee).forEach(id => insert(heap, id))
        }
    }

    for (let i = 0; i < 10 && heap.length > 0; i++) {
        res.push(del(heap)[1])
    }

    return res

};

var insert = function(heap, tweet) {
    heap.push(tweet)
    let i = heap.length - 1
    let parent = Math.floor(i / 2)

    while (i > 0 && heap[parent][0] < heap[i][0]) {
        let temp = heap[parent]
        heap[parent] = heap[i]
        heap[i] = temp
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
        let temp = heap[largest]
        heap[largest] = heap[i]
        heap[i] = temp
        heapify(heap, largest)
    }
}


/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {  
    if (followerId !== followeeId) {
        if (!this.followMap.has(followerId)) {
                this.followMap.set(followerId, new Set())
            }
        this.followMap.get(followerId).add(followeeId)
    }
    
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (this.followMap.has(followerId)) {
        this.followMap.get(followerId).delete(followeeId)    
    }
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
