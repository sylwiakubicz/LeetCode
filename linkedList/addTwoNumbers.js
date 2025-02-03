// rozwiązanie w jednej pętli
var addTwoNumbers = function(l1, l2) {
    let dummy = {val: 0, next: null} 
    let node = dummy

    let oneLeft = false
    // iterujemy dopóki jedna albo druga lista ma jakąs cyfrę
    while (l1 || l2) {
        // jeśli l1 labo l2 jest null to będzimey dodawać 0
        i = l1 ? l1.val : 0
        j = l2 ? l2.val : 0
        sum = oneLeft ? (1 + i + j) : (i + j)
        if (sum <= 9) {
            val = sum
            oneLeft = false
        } else {
            val = sum - 10
            oneLeft = true
        }
        node.next = new ListNode(val)
        node = node.next
        // jesli list się skończyła to ustaw na null
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }

    if (oneLeft) {
        node.next = new ListNode(1)
    }

    return dummy.next
};

// rozwiązanie w jednej pętli z uproszczeniem logiki do sumowania i przepisywania reszty
var addTwoNumbers = function(l1, l2) {
    let dummy = {val: 0, next: null} 
    let node = dummy

    let oneLeft = 0
    while (l1 || l2) {
        i = l1 ? l1.val : 0
        j = l2 ? l2.val : 0
        
        sum = oneLeft + i + j
        val = sum % 10
        oneLeft = Math.floor(sum / 10)
        
        node.next = new ListNode(val)
        node = node.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }

    if (oneLeft) {
        node.next = new ListNode(1)
    }

    return dummy.next
};

// rozwiązanie rozdielające pętle na 
// 1) elementy są dostępne i 1 1 i w 2 liście
// 2) elementy są dostępne tylko w jednej z nich
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
