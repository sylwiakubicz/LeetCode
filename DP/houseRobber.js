var rob = function(nums) {
    const N = nums.length
    let maxMoney = new Array(N + 1)
    
    maxMoney[0] = nums[0]
    maxMoney[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < N; i++) {
        // aalbo bierzemy 0 i 2 albo tylko 1
        maxMoney[i] = Math.max(nums[i] + maxMoney[i - 2], maxMoney[i - 1])
    }
    

    return maxMoney[N - 1]
};
