// najszybsze rozwiazanie 
var reorderList = function(head) {
    let slow = head
    // dla krótszych list lepiej, ponieważ dodanie fast = head.next wymaga dodatkowej operacji przed pętlą ktrej tutaj nie ma
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let current = slow.next
    slow.next = null
    prev = null
    while (current) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    
    let second = prev
    let first = head
    while (second) {
        temp1 = first.next
        temp2 = second.next

        first.next = second
        second.next = temp1

        first = temp1
        second = temp2
    }
};

// rozwiązanie z dodatkowymi funckjami
var reorderList = function(head) {
    let middle = findMiddle(head)
    let second = reverse(middle.next)
    middle.next = null
    let first = head
    
    while (second) {
        temp1 = first.next
        temp2 = second.next

        first.next = second
        second.next = temp1

        first = temp1
        second = temp2
    }

};

var findMiddle = function(head) {
    let slow = head
    let fast = head.next

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}

var reverse = function(head) {
    let prev = null
    let current = head

    while (current) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }

    return prev
}

// rozwiązanie z wszaytskim w jednej funkcji
var reorderList = function(head) {
    let slow = head
    let fast = head.next
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let second = slow.next
    slow.next = null
    prev = null
    while (second) {
        next = second.next
        second.next = prev
        prev = second
        second = next
    }
    
    second = prev
    let first = head
    while (second) {
        temp1 = first.next
        temp2 = second.next

        first.next = second
        second.next = temp1

        first = temp1
        second = temp2
    }
};
