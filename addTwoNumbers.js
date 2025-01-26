var addTwoNumbers = function(l1, l2) {
    let dummy = {val: 0, next: null} 
    let node = dummy

    let oneLeft = false
    while (l1 && l2) {
        sum = oneLeft ? (1 + l1.val + l2.val) : (l1.val + l2.val)
        if (sum <= 9) {
            val = sum
            oneLeft = false
        } else {
            val = sum - 10
            oneLeft = true
        }
        node.next = new ListNode(val)
        node = node.next
        l1 = l1.next
        l2 = l2.next
    }

    while (l1) {
        if (l1.val === 9 && oneLeft) {
            val = 0
        } else if (oneLeft && l1.val < 9) {
            val = l1.val + 1
            oneLeft = false
        } else {
            val = l1.val
        }
        node.next = new ListNode(val)
        node = node.next
        l1 = l1.next
    }

    while (l2) {
        if (l2.val === 9 && oneLeft) {
            val = 0
        } else if (oneLeft && l2.val < 9) {
            val = l2.val + 1
            oneLeft = false
        } else {
            val = l2.val
        }
        node.next = new ListNode(val)
        node = node.next
        l2 = l2.next
    }

    if (oneLeft) {
        node.next = new ListNode(1)
    }

    return dummy.next
};
