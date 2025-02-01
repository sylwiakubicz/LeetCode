// niezoptymalizowany pamięciowo
var productExceptSelf = function(nums) {
    const n = nums.length
    let result = new Array(n)
    let prefixArray = new Array(n)
    prefixArray[0] = 1
    let suffixArray = new Array(n)
    suffixArray[nums.length - 1] = 1

    for (let i = n - 2; i >= 0; i--) {
        suffixArray[i] = suffixArray[i + 1] * nums[i + 1]
    }
    for (let i = 1; i < n; i++) {
        prefixArray[i] = prefixArray[i - 1] * nums[i - 1]
        result[i - 1] = prefixArray[i - 1] * suffixArray[i - 1]
    }
    result[n - 1] = prefixArray[n - 1] * suffixArray[n - 1]
    return result
};

// zoptymalizowany pamięciowo
var productExceptSelf = function(nums) {
    const n = nums.length
    let result = new Array(n)
    
    let prefix = 1
    for (let i = 0; i < n; i++) {
        result[i] = prefix
        prefix *= nums[i]
    }

    let suffix = 1
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix
        suffix *= nums[i]
    }

    return result

};
