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

    //first  1 -> 2
    // second 4 -> 3
    let second = prev
    let first = head
    while (second) {
        // przetrzymujemy odniesienia do następnych nodów w listach
        // temp1 -> 2
        // temp2 -> 3

        // druga iteracja
        // temp1 -> null
        //  temp2 -> null
        temp1 = first.next
        temp2 = second.next

        // 1 -> 4 
        // 4 -> 2
        // = 
        // 1 -> 4 -> 2

        // druga iteracja
        // 2 -> 3
        // 3 -> null
        // =
        // 1 -> 4 -> 2 -> 3 -> null
        first.next = second
        second.next = temp1

        // przesuwamy się na kolejne nody wcześniej zapisane w temp variables
        // first = 2
        // second = 3

        // first = null
        // second = null
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
