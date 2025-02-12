/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const N = edges.length
    const par = new Array(N + 1).fill(0).map((_, i) => i) // np. [1,2,3,4,5] lista rodziców gdzie dla i = 2 par[i] jest jego rodzicem
    const rank = new Array(N + 1).fill(1) // ilość nodów przypadajacych na dany union (zawsze chcemy dołączać do tego co ma więcej), początkowo dla każdego i jest to 1

    const find = (n) => {
        if (par[n] !== n) {
            par[n] = find(par[n]); 
        }
        return par[n];
    }

    const union = (n1, n2) => {
        const p1 = find(n1)
        const p2 = find(n2)

        if (p1 === p2) {
            // należą do tego samego setu -> utworzą cykl
            return false
        } 
        // jeśli nie ma cyklu to łączymy oba sety
        if (rank[p1] > rank[p2]) {
            // tutaj p1 ma więcej nodów do siebie połączonych, więc chcemy żeby on został rodzicem dla p2
            par[p2] = p1
            rank[p1] += rank[p2]
        } else {
            // tutaj odwrotna sytuacja
            par[p1] = p2
            rank[p2] += rank[p1]
        }

        return true
    }

    for (let [n1, n2] of edges) {
        if (!union(n1,n2)) {
            return [n1,n2]
        }
    }
    
    return []

};
