
var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0, head);

    // potrzebujemy pointer przed naszą grupą żeby móc ją połączyć z następną
    let groupPrev = dummy

    while (true) {
        // tworzymy nową grupę
        kth = getKth(groupPrev, k)
        // jeśli nie ma wystarczającej liczby nodów żeby ją utworyzć to przrywamy pętle - doszliśmy do końca listy
        if (!kth) break

        groupNext = kth.next // Zapamiętujemy wskaźnik na kolejny element (poza grupą)

        // reverse group
        let prev = kth.next // Ustawiamy prev na element po grupie, czyli `4`
        let current = groupPrev.next // Curr wskazuje na pierwszy element grupy, czyli `1`

        while (current != groupNext) {
            tmp = current.next // Zapamiętujemy następny węzeł, żeby nie zgubić listy
            current.next = prev // Odwracamy wskaźnik
            prev = current // Przesuwamy prev na aktualny węzeł
            current = tmp // Przesuwamy curr na następny węzeł
        }

        temp = groupPrev.next // Temp to pierwszy węzeł grupy przed odwróceniem (czyli `1`)
        groupPrev.next = kth // Łączymy poprzednią grupę z nowym headem (czyli `3`)
        groupPrev = temp // Przesuwamy prev_group na koniec odwróconej grupy (czyli `1`)
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
