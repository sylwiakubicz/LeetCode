var findOrder = function(numCourses, prerequisites) {
    let result = []
    let visited = new Set()
    let cycle = new Set()
    let preMap = new Map()

    for (const [course, pre] of prerequisites) {
        if (!preMap.has(course)) {
            preMap.set(course, []);
        }
        preMap.get(course).push(pre);
    }

    const dfs = (node) => {
        if (cycle.has(node)) {
            return false
        }

        if (visited.has(node)) {
            return true;
        }

        cycle.add(node)
        for (let crs of preMap.get(node) || []) {
             if (!dfs(crs)) {
                return false;
            }
        }
        cycle.delete(node)
        visited.add(node)
        result.push(node)
        return true
    }

    for (let c = 0; c < numCourses; c++) {
        if (!dfs(c)) {
            return [];
        }
    }

    return result
};
