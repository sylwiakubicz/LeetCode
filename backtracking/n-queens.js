var solveNQueens = function(n) {
    // do śledzenia czy dana kolumn/pozytywna diagonala/negatywna diagonala jest wolna
    let col = new Set()
    let posDiag = new Set()
    let negDiag = new Set()

    let res = []
    let board = Array.from({length: n}, () => Array(n).fill('.'));
    
    const backtrack = (r) => {
        if (r === n) {
            res.push(board.map(row => row.join('')))
            return
        }

        for (let c = 0; c < n; c++) {
                if (col.has(c) || posDiag.has(r + c) ||
                    negDiag.has(r - c)) {
                    continue;
                }

                // oznaczamy dane miejsce jako zajęte przez królową więc
                // w następnym wierszu nie będziemy mogli wstawić w tej samej kolumnie więc ustawiamy ją jako zajętą
                // nie może też w tej samej pozytywnej diagonali "/" - elementy na tej samej diagonali ich indeksy r i c będą się sumowac do tej samej stałej
                // nie może byc też na tej samej negatywnej diagonali "\" - elementy na tej samej diagonali,, ich indeksy r i c będą dawały taką samą stałą różnicę
                col.add(c);
                posDiag.add(r + c);
                negDiag.add(r - c);
                board[r][c] = 'Q';

                // przechodzimy do kolejnego wiersz
                backtrack(r + 1);

                // gdy się cofamy to musimy zwolnić aktulanie testowaną pozycje królowej - usuwamy zablowaną kolumną, i obie diagonalen z setów oraz ponownie wstawimy "." na planszy
                col.delete(c);
                posDiag.delete(r + c);
                negDiag.delete(r - c);
                board[r][c] = '.';
        }
    }

    backtrack(0)
    return res
};    
