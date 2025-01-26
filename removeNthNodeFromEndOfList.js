// nie pytali o reverse wiec niekoniecznie chcemy odwracać naszą listę i usuwać node gdy n = 2
var removeNthFromEnd = function(head, n) {
    // tworzymy dummy node, do którego będziemy następnie przyłączać pozostałe
    let dummy = {val: 0, next: null}
    let node = dummy

    // sprawdzamy size naszej linked listy 
    let size = 0
    let current = head
    while (current) {
        size++
        current = current.next
    }

    // current musi wrócić na początek linked listy bo zatrzymałs ię na wskazywaniu na null przez wcześńiejszą pętle
    current = head
    // dzięki size wiemy ile początkowych elementów zostanie bez zmian zanim coś będziemy chceicli usunąć size - n
    let i = size - n
    // dopóki current przypisujemy do node kolejne elementy i zmiejszamy i o 1 dopóki nie równa się 0
    while (current) {
        if (i === 0) {
            // dla i = 0 oznacza że dotarliśmy do noda, który ma byc usunięty więc przed dodaniem go do listy przeuswamy current o jeden do przodu i to jego przypisujemyt
            current = current.next
            node.next = current
            node = node.next
            // możemy zrobić break bo current zawiera wskaźniki do końca listy wiec całą końcówkę już mamy dodaną 
            break
        } 
        // przypisujemt current do nnoda
        node.next = current
        // przesuwamy się o jeden node w prawo na obu listach
        current = current.next
        node = node.next
        i--
    }

    return dummy.next
};

// technika z dwoma pointerami
var removeNthFromEnd = function(head, n) {
    let dummy = {val: 0, next: head}
    let left = dummy
    let right = head
    
   
    while (n > 0 && right) {
        right = right.next
        n--
    }

    while (right) {
        left = left.next
        right = right.next
    }

    left.next = left.next.next
    return dummy.next
};
