var hasCycle = function(head) {
    if (!head) return false

    let slow = head
    let fast = head.next

    while (fast !== null && fast.next !== null) {
        if (fast === slow) return true
        fast = fast.next.next
        slow = slow.next
    }

    return false
};
