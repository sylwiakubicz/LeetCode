class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null)
        this.endOfWord = false
    }
}

var WordDictionary = function() {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
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
WordDictionary.prototype.search = function(word) {
    return dfs(this.root, word, 0)
};

var dfs = function(node, word, j) {
    let current = node
    
    for (let i = j; i < word.length; i++) {
        let char = word[i]
        if (char === ".") {
            for (let child of current.children) {
                if (child !== null && dfs(child, word, i + 1)) {
                    return true
                }
            }
            return false
        } else {
            let index = char.charCodeAt(0) - 97
            if (current.children[index] === null) {
                return false
            }
            let node = current.children[index]
            current = node
        }
    }

    return current.endOfWord
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
