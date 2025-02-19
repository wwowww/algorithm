# 문제 설명
## Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.


### Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

### Example 2:

Input: s = "rat", t = "car"

Output: false



``` javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    return s.split("").sort().join("") === t.split("").sort().join("");
};
```

## 다른사람풀이
시간복잡도
- 내 풀이는 O(n log n)
- 아래 코드는 O(n)
```js
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const buildStr = str => str.split("").reduce((acc,cur,index)=>{
        acc[cur.charCodeAt() - 97]++
        return acc
    }, Array.from({length:26}).fill(0)).toString()
    return buildStr(s) === buildStr(t)
};
```