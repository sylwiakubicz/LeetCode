class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (n === 0) return true

        if (edges.length > n - 1) {
            return false
        }

        let preMap = new Map()
        for (let i = 0; i < n; i++) {
            preMap.set(i, [])
        }
        for (let edge of edges) {
            preMap.get(edge[0]).push(edge[1])
            preMap.get(edge[1]).push(edge[0])
        }

        let visit = new Set()
        const dfs = (node, prev) => {
            if (visit.has(node)) {
                return false
            }

            visit.add(node)
            for (let child of preMap.get(node)) {
                if (child === prev) continue 
                if (!dfs(child, node)) {
                    return false
                }
            }

            return true
        } 

        // no cycle
        // no standalone nodes
        return dfs(0,-1) && n === visit.size
    }
}

