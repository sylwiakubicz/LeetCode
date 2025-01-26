var removeNthFromEnd = function(head, n) {
    let dummy = {val: 0, next: null}
    let node = dummy
    
    let size = 0
    let current = head
    while (current) {
        size++
        current = current.next
    }

    current = head
    let i = size - n
    while (current) {
        if (i === 0) {
            current = current.next
            node.next = current
            node = node.next
            break
        } 
        node.next = current
        current = current.next
        node = node.next
        i--
    }

    return dummy.next
};
