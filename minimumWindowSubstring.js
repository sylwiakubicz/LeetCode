
var minWindow = function(s, t) {
    if (s.length < t.length) return "";

    let countT = new Map()
    let window = new Map()

    for (let char of t) {
        countT.set(char, (countT.get(char) || 0) + 1)
    }

    let have = 0
    let need = countT.size

    let res = [-1, -1]
    let resLen = Infinity
    let l = 0

    for (let r = 0; r < s.length; r++) {
        let c = s[r]
        window.set(c, (window.get(c) || 0) + 1)

        if (countT.has(c) && window.get(c) === countT.get(c)) {
            have++
        }

        while (have === need) {
            if ((r - l + 1) < resLen) {
                res = [l, r]
                resLen = r - l + 1
            }

            window.set(s[l], window.get(s[l]) - 1)
            if (countT.has(s[l]) && window.get(s[l]) < countT.get(s[l])) {
                have--
            }

            l++
        }
    }


    return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
};
