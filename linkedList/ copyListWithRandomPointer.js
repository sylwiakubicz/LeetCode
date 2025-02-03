var copyRandomList = function(head) {
    let map = new Map()
    map.set(null, null)

    // pierwsze przejscie, tworzymy kopie wszytskich nodów i przetrzymujemy je w mapie
    // narazie nie tworyzmy żadnych połączeń
    let current = head
    while (current) {
        copy = new Node(current.val)
        map.set(current, copy)
        current = current.next
    }

    // tworzymy połączenia nowych nodów na podstawie starych
    current = head
    while (current) {
        copy = map.get(current)
        copy.next = map.get(current.next)
        copy.random = map.get(current.random)
        current = current.next
    }

    return map.get(head)    
};

// rozwiązanie z rekurencją
class Solution {
    constructor() {
        this.map = new Map();
    }
    
    copyRandomList(head) {
        if (head === null) return null;
        if (this.map.has(head)) return this.map.get(head);
        const copy = new Node(head.val);
        this.map.set(head, copy);
        copy.next = this.copyRandomList(head.next);
        copy.random = this.map.get(head.random) || null;
        return copy;
    }
}
