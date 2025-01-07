# 문제 설명
Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].


``` javascript
function solution(A) {
    let answer = 0;
    const numSort = A.sort();
    const filterArray = [... new Set(numSort)];

    for(let i=0; i<A.length; i++) {
        if (filterArray[i] < 0) return 1;
        if(filterArray[i]+1 !== filterArray[i+1]) return filterArray[i] + 1
    }
}
```