var topKFrequent = function(nums, k) {
    let hashMap = new Map()
    let topFrequnetNumber = new Array()

    for (let i = 0; i < nums.length; i++) {
        hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1)
    }  

    let sortedNumsArray = Array.from(hashMap).sort((a,b) => b[1] - a[1])

    for (let j = 0; j < k; j++) {
        topFrequnetNumber.push(sortedNumsArray[j][0])
    } 
    return topFrequnetNumber

};
