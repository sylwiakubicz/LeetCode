/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    let oldToNew = new Map()
    return dfs(node, oldToNew)
};

// zbieramy nowo utworzone nody w hashmapie (old -> copy)
// jeśli  nie ma go w hashmapie to tworzymy nowy a jeśli jest to go zwracamy
// dla wszystkich neighbors uruchamiamy dfs (będziemy zwijać od tyłu aż pierwsze wywołanie zostanie zamknięte jako ostatnie i zwróci całość grafu)
var dfs = function(node, oldToNew) {
    if (node === null) return null

    if (oldToNew.has(node)) {
        return oldToNew.get(node)
    }

    let copy = new Node(node.val)
    oldToNew.set(node, copy)

    for (let nei of node.neighbors) {
        copy.neighbors.push(dfs(nei, oldToNew));
    }

    return copy
}
