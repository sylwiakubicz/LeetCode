var isSubtree = function(root, subRoot) {
    if (subRoot === null) return true
    if (root === null) return false
    
    // sprawdzanie, czy są takie same (jeśli już root się nie zgadza to będzie to tylko jeden if)
    if (isSameTree(root, subRoot)) {
        // to return pozwala po prostu szybciej zwijać rekurencje 
        return true
    } else {
        // jeśli pierwsze się okazało że nie jest poddrzewem to przechodzimy po kolejnych nodach z pierwszego drzewka
        // najpierw po lewej gałęzi dla każdego sprawdzając czy nie jest przypadkiem poddrzewem i dopiero jeśli z lewego mamy false to sprawdzamy prawą
        // jeśli w lewej stronie było true to dla || nie ma znaczenia co jest po drugiej stronie bo i tak będzie zwrócona prawda więc nawet nei sprawdzamy
        return isSubtree(root.left, subRoot) ||
        isSubtree(root.right, subRoot)
    }
};

var isSameTree = function(p, q) {

    if (p === null && q === null) {
        return true
    }
    if (p !== null && q !== null && p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(q.right, p.right)
    } 
    else {
        return false
    }
};
