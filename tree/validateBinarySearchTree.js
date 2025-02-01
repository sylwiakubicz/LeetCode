// Główna funkcja, która sprawdza, czy drzewo jest poprawnym BST
var isValidBST = function(root) {
    // Wywołujemy funkcję pomocniczą `valid`, przekazując początkowy przedział wartości: (-∞, ∞)
    return valid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};

// Funkcja pomocnicza sprawdzająca, czy dane poddrzewo jest BST
var valid = function(node, left, right) {
    // Jeśli dotarliśmy do pustego węzła (liścia), zwracamy `true`
    if (node === null) return true;

    // Sprawdzamy, czy wartość węzła mieści się w poprawnym zakresie (left, right)
    if (!(node.val < right && node.val > left)) return false;

    // Rekurencyjnie sprawdzamy lewe i prawe poddrzewo:
    // - Lewe poddrzewo musi mieć wartości < obecny węzeł (node.val)
    // - Prawe poddrzewo musi mieć wartości > obecny węzeł (node.val)
    return (
        valid(node.left, left, node.val) && // Sprawdzamy lewe poddrzewo z nową górną granicą (node.val)
        valid(node.right, node.val, right)  // Sprawdzamy prawe poddrzewo z nową dolną granicą (node.val)
    );
};
