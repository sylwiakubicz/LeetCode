var sortList = function(head) {
    if (head === null || head.next === null) return head

    let middle = findMiddle(head)
    let nextToMiddle = middle.next
    middle.next = null

    let left = sortList(head)
    let right = sortList(nextToMiddle)

    return merge(left, right)
};

var merge = function(l1, l2) {
    if (l1 === null) return l2
    if (l2 === null) return l1

    let result;
    if (l1.val <= l2.val) {
        result = l1
        result.next = merge(l1.next, l2)
    } else {
        result = l2
        result.next = merge(l1, l2.next)
    }

    return result
}

var findMiddle = function(head) {
    if (head === null) return head

    let slow = head
    let fast = head.next

    while(fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
    }

    return slow
}
