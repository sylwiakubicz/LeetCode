class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adj = new Map()
        let visit = new Set()
        let components = 0
        
        for (let i = 0; i < n; i++) {
            adj.set(i, [])
        }
        for (let [n1, n2] of edges) {
            adj.get(n1).push(n2)
            adj.get(n2).push(n1)
        }

        // cykle nas nie interesują - mogą występować
        // po napotkaniu cyklu po prostu wracamy, żeby nie robić nieskończonej pętli
        // ale nie przerywamy dfs
        const dfs = (node, prevNode) => {
            if (visit.has(node)) {
                return
            }

            visit.add(node)
            for (let child of adj.get(node)) {
                if (child === prevNode) continue
                dfs(child, node)
            }
            return
        }   

        // interesuje nas ile razy trzeba uruchomić dfs, żeby przejść po wszytskich nodach
        // każde uruchomienie to nowy component
        // nie chcemy uruchamiać na już odwiedzonych nodach
        for (let c = 0; c < n; c++) {
            if (!visit.has(c)) {
                components++
                dfs(c, -1)
            }
        }

        return components
    }
}

