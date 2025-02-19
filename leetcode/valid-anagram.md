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

    const count = new Array(26).fill(0); // 알파벳 빈도 기록용 배열 초기화

    // 두 문자열을 한 번씩 순회하며 각 문자 빈도 계산
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++; // s의 문자 빈도 증가
        count[t.charCodeAt(i) - 97]--; // t의 문자 빈도 감소
    }

    // 빈도 배열에 모든 값이 0이면 ture, 아니면 false 반환
    return count.every(val => val === 0);
};
```

- 시간 복잡도: O(n)
  - 문자열을 한 번 순회하면서 빈도 배열을 갱신
  - `count[s.charCodeAt(i) - 97]++`와 `count[t.charCodeAt(i) - 97]--`는 모두 **O(1)**로 동작하므로, 전체 시간 복잡도는 **O(n)**
- 공간 복잡도: O(1)
  - count 배열은 크기가 26으로 고정
  - 이 배열은 26개 이므로 O(1)의 공간 복잡도를 가짐