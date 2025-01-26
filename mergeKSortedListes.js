// łączymy po dwie listy na raz i wynik node.next nadpisujemy
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
