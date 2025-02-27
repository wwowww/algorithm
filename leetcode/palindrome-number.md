# Description
> https://leetcode.com/problems/palindrome-number/

Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Constraints:
-231 <= x <= 231 - 1
 
Follow up: Could you solve it without converting the integer to a string?

# Code
```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const strX = x.toString();
    const reversedStr = strX.split('').reverse().join('');

    return strX === reversedStr;
};
```

- 내가 작성한 위의 풀이는 `x.toString()`으로 문자열을 변환하는 추가적인 연산을 필요로 함
- 문자열을 조작하기 위해 `split(), reverse(), join()`을 사용하는데 문자열 조작 함수들은 메모리 할당 및 복사, 문자열 순회 등의 작업을 수행 
  - 이는 숫자 연산보다 상대적으로 많은 시간을 소모
- 아래 코드의 숫자 연산은 컴퓨터의 CPU에서 직접적으로 처리되는 기본연산이기 때문에 문자열 조작보다 훨씬 빠름
- 추가적인 메모리 할당 및 복사가 필요하지 않기 때문에 메모리 사용량이 적어 효율적
- 숫자 연산만 사용하는 방법은 문자열 변환 및 조작에 비해 오버헤드가 적고, 기본 연산의 효율성과 메모리 효율성으로 인해 일반적으로 더 빠름

```js
javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversed = 0;
    let original = x;

    while (original > reversed) {
        reversed = reversed * 10 + (original % 10);
        original = Math.floor(original / 10);
    }

    return original === reversed || original === Math.floor(reversed / 10);  
};
```