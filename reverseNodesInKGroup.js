
var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0, head);

    // potrzebujemy pointer przed naszą grupą żeby móc ją połączyć z następną
    let groupPrev = dummy

    while (true) {
        // tworzymy nową ggrupę
        kth = getKth(groupPrev, k)
        if (!kth) break

        // potrzebujemy też pointer na node tuż za naszą grupą, żeby połączyć z poprzednią
        groupNext = kth.next

        // reverse group
        let prev = kth.next
        let current = groupPrev.next

        while (current != groupNext) {
            tmp = current.next
            current.next = prev
            prev = current
            current = tmp
        }

        // first node in group
        temp = groupPrev.next
        // kth is the last node in group
        groupPrev.next = kth
        groupPrev = temp
    }

    return dummy.next
};

var getKth = function(curr, k) {
    while (curr && k > 0) {
        curr = curr.next
        k--
    }
    return curr
}
