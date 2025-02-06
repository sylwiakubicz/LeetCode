
var combinationSum = function(candidates, target) {
    // nasze rozwiązanie zakłada, że elementy są posortowane więc musimy sobie posortować je rosnąco
    // jeśli dodanie 2 już przekracza nam taget to nie ma co próbować nawet dodawać większego elementu
    let nums = candidates.sort((a,b) => a - b)
    
    let res = []
    const dfs = (j, current, total) => {
        // warunek który musi być spełniony
        if (total === target) {
            res.push([...current])
            return
        }

        // gdy przechodzimy do kolejnego elmenetu z candidates to już pomijamy te poprzednie żeby nie dublować wyników
        for (let i = j; i < nums.length; i++) {
            // gdy suma już przekracza target nie kontunuujemy ścieżki
            if (total + nums[i] > target) {
                return
            }
            // nasz wybór polega na tym że albo dodajemy i przechodzimy dalej
            // albo nie dodajemy danej liczby i przechodzimy dalej
            current.push(nums[i])
            dfs(i, current, total + nums[i])
            current.pop()
        }
    }

    dfs(0, [], 0)
    return res
};
