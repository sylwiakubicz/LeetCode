var combinationSum2 = function(candidates, target) {
    const nums = candidates.sort((a,b) => a - b)

    let res = []
    const dfs = (i, current, total) => {
        if (total === target) {
            res.push([...current])
            return
        }

        
        if (total + nums[i] > target || i === nums.length) {
            return
        }

        current.push(nums[i])
        dfs(i + 1, current, total + nums[i])
        current.pop()
        
        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++;
        }

        dfs(i + 1, current, total);
        
    }

    dfs(0,[],0)
    return res
};
