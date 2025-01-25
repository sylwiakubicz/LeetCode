// Iteracyjne rozwiązanie
var mergeTwoLists = function(list1, list2) {
    let dummy = {val: 0, next: null}
    let node = dummy

    while (list1 && list2) {
        if (list1.val < list2.val) {
            node.next = list1
            list1 = list1.next
        } else {
            node.next = list2
            list2 = list2.next
        }
        node = node.next
    }

    if (list1) {
        node.next = list1
    } else if (list2) {
        node.next = list2
    }

    // dummy.next to początkowy węzeł listy, a dzięki strukturze next tworzymy pełną, jednokierunkową listę. 
    return dummy.next
};

// rekurencyjne rozwiązanie
var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2
    if (!list2) return list1

    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
};
