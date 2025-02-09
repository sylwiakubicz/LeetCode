var orangesRotting = function(grid) {
    const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const ROWS = grid.length
    const COLS = grid[0].length
    let time = 0
    let fresh = 0
    let q = []

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 1){
                fresh++
            } else if (grid[r][c] === 2) {
                q.push([r,c])
            }
        }
    }

    while (fresh !== 0 && q.length > 0) {
        let length = q.length

        for (let i = 0; i < length; i++) {
            const [row, col] = q.shift()

            for (let [dr, dc] of DIRECTIONS) {
                let r = row + dr
                let c = col + dc

                if (r >= 0 && c >= 0 && r < ROWS && c < COLS && grid[r][c] === 1) {
                    fresh--
                    q.push([r,c])
                    grid[r][c] = 2
                }
            }
        }

        time++
    }


    return fresh === 0 ? time : -1;
};


// zaznaczanie również 2 jako odwiedzonej (poprzednie tlyko 1 zamienialiśmy na 2 )
// Mniej operacji dodawania do kolejki (q.push())
// W wersji bez zmiany na 3, pomarańcze, które były już zgniłe (2), są pozostawione bez zmian, więc algorytm nie ma jednoznacznego sposobu, aby sprawdzić, czy już zostały odwiedzone w poprzednich iteracjach BFS.
// W wersji ze zmianą na 3, po dodaniu pomarańczy do kolejki, ich wartość jest zmieniana natychmiast, co zapobiega ich ponownemu dodaniu i sprawdzaniu w kolejnych krokach.

var orangesRotting = function(grid) {
    const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const ROWS = grid.length
    const COLS = grid[0].length
    let time = 0
    let fresh = 0
    let q = []

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 1){
                fresh++
            } else if (grid[r][c] === 2) {
                grid[r][c] = 3
                q.push([r,c])
            }
        }
    }

    while (fresh !== 0 && q.length > 0) {
        let length = q.length

        for (let i = 0; i < length; i++) {
            const [row, col] = q.shift()

            for (let [dr, dc] of DIRECTIONS) {
                let r = row + dr
                let c = col + dc

                if (r >= 0 && c >= 0 && r < ROWS && c < COLS && grid[r][c] === 1) {
                    fresh--
                    grid[r][c] = 3
                    q.push([r,c])
                }
            }
        }

        time++
    }


    return fresh === 0 ? time : -1;
};
  
