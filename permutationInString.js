// zoptymalizowany przypadek, działa podobnie jak sliding window do sum podtablic -> dodajemy wartość z r a odejmujemy wartość z l
var checkInclusion = function(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        // możemy wypełnić od razu obie tablice do przechowywania częstotliwości występowania poszczególnyc liter
        let s1Count = new Array(26).fill(0);
        let s2Count = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i) - 97]++;
        }

        // sprawdzamy ile liter ma taką samą częstotliwość
        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) {
                matches++; 
            }
        }

        // przesuwamy okno
        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) {
                return true;
            }

        //  dodając do tablicy nowy znak i updatując na jego podstawie matches
                // jeśli po tej opercji częstotliwości są te same to zwiększamy matches
                // jeśli zmiana spowodowała że dodaliśmy litere, której nie ma w s1 (s1 musiałoby mieć o 1 więcej żeby było git) to pomniejszamy matches
            let index = s2.charCodeAt(r) - 97;
            s2Count[index]++;
            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] + 1 === s2Count[index]) {
                matches--;
            }

        // ujmując pierwszy znak o którego się pozbyliśmy i updatując na jego podstawie mactches
                // jeśli po tej opercji częstotliwości są te same to zwiększamy matches
                // jeśli zmiana spowodowała że pozbyliśmy się dobre litery (s1 musiałoby mieć o 1 mniej żeby było git) to pomniejszamy matches
            index = s2.charCodeAt(l) - 97;
            s2Count[index]--;
            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] - 1 === s2Count[index]) {
                matches--;
            }
            l++;
        }
        
        // po ostatniej iteracji nie jest sprawdzany wwarunek z matches === 26 więc nei możemy zwracać bezpośrednio false 
        // temu zwracamy boolen z wyrażenia matches === 26
        return matches === 26;
};

// działa ale tylko na testcase podczas tun -> na submit dostje runtime exceed -> DO OPTYMALIZACJI
var checkInclusion = function(s1, s2) {

    if (s1.length === 1) {
        for (let l = 0; l < s2.length; l++) {
            if (s2[l] === s1[0]) return true
        }
        return false
    }
    
    let s1CharMap = new Map()
    
    for (let letter of s1) {
        val = s1CharMap.get(letter)
        s1CharMap.set(letter, val ? val + 1 : 1)
    }


    let s2CharMap = new Map()
    let r;
    for (let l = 0; l < s2.length; l++) {
        r = l + 1
        s2CharMap.clear()

        // check first letter
        if (!s1CharMap.has(s2[l])) continue
        s2CharMap.set(s2[l], 1)
        
        // check letters between
        while (r < s2.length && r - l + 1 < s1.length && s1CharMap.has(s2[r])) {
            if (s2CharMap.has(s2[r]) && s2CharMap.get(s2[r]) >= s1CharMap.get(s2[r])) {
                break
            }
            val = s2CharMap.get(s2[r])
            s2CharMap.set(s2[r], val ? val + 1 : 1)
            r++
        }

        // check last letter
        if (!s1CharMap.has(s2[r]) || r - l + 1 !== s1.length || s2CharMap.get(s2[r]) >= s1CharMap.get(s2[r])) continue
        
        return true
    }


    return false
};
