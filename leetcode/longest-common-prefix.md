# Description
https://leetcode.com/problems/longest-common-prefix/description/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


# Code

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let prefix = "";
    
    if(strs === null || strs.length === 0) return prefix;

    for(let i=0; i<strs[0].length; i++) {
        const char = strs[0][i]; // 이것을 바탕으로 비교
        
        for(let j=1;j<strs.length; j++) {
            if(strs[j][i] !== char) {
                return prefix;
            }
        }

        // build prifix
        prefix = prefix+char;
    }

    return prefix;
};
```
