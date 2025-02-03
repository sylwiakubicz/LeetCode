// rozwiązanie z tylko hashmapa

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map()
    this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1
    
    // jeśli key istnieje to usuwamy go z miejsca gdzie był 
    // i wstawiamy go w na sam początek hashMapy
    // dzięki temu gdy przekroczymy wartość capacity podczas dodawania to możemy usunąć pierwszy isteniejący klucz w hashmapie
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)
    return value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        // później go dodamy i będzie jako najbardziej recent przez to 
        // jeśli był to znaczy że to tylko update
        this.cache.delete(key)
    }
    // jeśli dodajemy nowy to musimy sprawdzić capacity
    else if (this.capacity === this.cache.size) {
        // jeśli mamy zapchane capacity to usuwamy pierwszy klucz z hashmapy = najdawniej używane dane
        const firstKey = this.cache.keys().next().value
        this.cache.delete(firstKey)
    }
    this.cache.set(key, value)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
