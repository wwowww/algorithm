// 스택을 활용한 문제

function solution(input) {
  const stack = [];
  for(const char of input) {
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
}


console.log(solution("[[]])(][{}]"))
console.log(solution("[[]]"))