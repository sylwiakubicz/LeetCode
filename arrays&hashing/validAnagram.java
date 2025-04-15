
class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;

        int[] sLetter = new int[26];
        int[] tLetter = new int[26];

        for (int i = 0; i < s.length(); i++) {
            sLetter[Character.codePointAt(s, i) - 97]++;
            tLetter[Character.codePointAt(t, i) - 97]++;
        }

        for (int i = 0; i < 26; i++) {
            if (sLetter[i] != tLetter[i]) return false;
        }

        return true;
    }
}
