# 문제 설명

- 앞으로, 뒤로 읽었을 때 같은 문자열
- `예) eye, level, ...`

## 1. 추가 문자열을 활용하는 법

```js
function checkPalindrome(s){
  let reversed = "";
  for (let i=s.length - 1; i>=0;i--) {
    reversed += str[i]
  }
  return reversed === str;
}
```

## 2. two pointer 활용하는 방법

``` javascript
function solution(s){
    const strLength = s.length;
    const middleLength = Math.floor(strLength / 2);
    for (let i=0;i<middleLength;i++) {
        if(s.charAt(i) !== s.charAt(strLength - 1 - i)) {
            return false
        }
    }
    
    return true;
}
```