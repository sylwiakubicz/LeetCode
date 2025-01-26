// łączymy po dwie i wynik zapisujemy w nowej tablicy, którą następnie przyposujemy do początkowej
// zawiera ona wtedy dwa razy mniej list
// łączymy po dwie dopóki nie zostanie nam tylko jedna
// O(n * log k)
var mergeKLists = function(lists) {
    if (lists.length === 0) return null

    while (lists.length > 1) {
        const mergedLists = []
        // uwaga iteracja co dwie
        // lists = [2 -> null, 1 -> null, 5 -> null, 3 -> null]
        // lists[(1 -> 2 -> null), (3 -> 5 -> null)]
        // lists[(1 -> 2 -> 3 -> 5 -> null)]
        for (let i = 0; i < lists.length; i += 2) {
            mergedLists.push(merge(lists[i], lists[i + 1]))
        }
        lists = mergedLists
    }

    return lists[0]
};


var merge = function(list1, list2){
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

    return dummy.next
}




// łączymy po dwie listy na raz i wynik node.next nadpisujemy
// czyli łączymy dwie listy -> tą co wcześniej połączyliśmy i kolejną z listy "lists"
// ostatecznie porównujemy wiele razy to samo i złożoność czasowa wynosi O(n * k)
var mergeKLists = function(lists) {
    let dummy = {val: 0, next: null}
    let node = dummy 
    if (lists.length === 0) return dummy.next

    // node.next wskazuje na pierwszą listę z tablicy
    node.next = lists[0]
    for (let i = 1; i < lists.length; i++) {
      // nadpisujemy aktualny node.next zmergowanymi node.next i następną z kolei listą w liscie
        node.next = merge(node.next, lists[i])
    }

    return dummy.next
};


var merge = function(list1, list2){
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

    return dummy.next
}
