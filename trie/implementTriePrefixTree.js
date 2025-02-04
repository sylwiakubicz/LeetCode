// wersja z tablicą 
class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.endOfWord = false
    }
}

var Trie = function() {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let current = this.root
    for (let char of word) {
        let index = char.charCodeAt(0) - 97
        if (current.children[index] === null) {
            current.children[index] = new TrieNode()
        }
        let node = current.children[index]
        current = node
    }
    current.endOfWord = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let current = this.root
    for (let char of word) {
        let index = char.charCodeAt(0) - 97
        if (current.children[index] === null) {
            return false
        } 
        let node = current.children[index]
        current = node
    }

    if (!current.endOfWord) return false

    return true
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let current = this.root
    for (let char of prefix) {
        let index = char.charCodeAt(0) - 97
        if (current.children[index] === null) {
            return false
        } 
        let node = current.children[index]
        current = node
    }

    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
