/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    // tworzymy set z wszytskich słów w słowniku - wyszukiwaie w set to O(1)
    const words = new Set(wordList);

    // jeśli końcowego słowa nie ma w słowniku to kończymy funkcję
    if (!words.has(endWord) || beginWord === endWord) {
        return 0;
    }
    let res = 0;
    const q = new Queue([beginWord]);
    
    // bfs do szukania najkrótszej ścieżki
    while (!q.isEmpty()) {
        res++;
        let len = q.size();
        // bfs multisource, sprawdzimy każdego sąsiada zanim zwiększymy ścieżkę
        for (let i = 0; i < len; i++) {
            const node = q.pop();
            // basecase - aktualnie przetwarzane słowo to koncowe słowo
            if (node === endWord) return res;
            // dla każdej litery w słowie będziemy tworzyć każdą możliwą kombinajce *ord podmieniamy w na każdą inną literę niż w
            for (let j = 0; j < node.length; j++) {
                for (let c = 97; c < 123; c++) {
                    if (String.fromCharCode(c) === node[j]) {
                        continue;
                    }
                    // nowe słowo może mieć postać "aord"
                    const nei = node.slice(0, j) + 
                                String.fromCharCode(c) + 
                                node.slice(j + 1);
                    // jeśli aord jest w słowniku to dodajemy go do kolejki rozważań i usuwamy słowo z słownika - unikmiemy odwiedzania tych samych nodes kilkukrotnie
                    // jeśli nie ma takiego to sprawdzamy pozostałe kombinacje 
                    if (words.has(nei)) {
                        q.push(nei);
                        words.delete(nei);
                    }
                }
            }
        }
    }
    return 0;
}; 
