// zaczynamy od tyłu dla listy [1,2,3]
// wywołujemy permutate najpierw na 1,2,3 -> potem na 2,3 ---> i na końcu na 3 (co wywołanie ucinamy pierwszy element)
// zwracamy pusta tablice jako basecae
// następnie inicjalizujemy res i dodajemy do niego wszystkie permutacje dla ostateniego wywołania czyli dla 3 -> jedna opcaj [3]
// zwracamy res [[3]] i dla każdej permutacji w perms (czyli w tym co zwróciliśmy w poprzedniej iteracji) 
// wstawiamy dodatkową liczbę w każde dozwolone miejsce i dodajemy do res 
// powtarzamy aż wszystkie wywoałania funckji zostaną zamknięte i zwracamy ostateczną liczbę permutacji

var permute = function(nums) {
        if (nums.length === 0) {
            return [[]];
        }

        let perms = permute(nums.slice(1));
        let res = [];
        for (let p of perms) {
            for (let i = 0; i <= p.length; i++) {
                let p_copy = p.slice();
                p_copy.splice(i, 0, nums[0]);
                res.push(p_copy);
            }
        }
        return res;
};

