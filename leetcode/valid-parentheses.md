# Description

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

# Code

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for(const char of s) {
        if(char === "{" || char === "[" || char === "(") {
        stack.push(char);
        } else {
            const lastChar  = stack.pop();
            if( char === "}" && lastChar !== "{" ||
                char === "]" && lastChar !== "[" ||
                char === ")" && lastChar !== "("
            ) return false;
        }
    }

    return stack.length === 0;
};
```

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const dict = {
        '}':'{',
        ']':'[',
        ')':'(',
    }
    const prStack = [];
    for (let parenthese of s) {
        if (!dict[parenthese]) {
            prStack.push(parenthese);
        } else if (prStack[prStack.length-1] != dict[parenthese]) {
            prStack.push(parenthese);
        } else {
            prStack.pop();
        }
    }
    return prStack.length === 0;
};
```