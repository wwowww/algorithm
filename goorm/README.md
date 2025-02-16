# 구름 코딩테스트 Javascript로 입력받는 방법

- 구름에서의 코딩테스트의 경우 파일을 읽어서 테스트 케이스를 입력받는 코드를 직접 작성해줘야 한다.
- 입력되는 값을 line에서 한 줄씩 읽어들인다.

## 스켈레톤 코드
### case 1
```js
//case 1
const readline = require('readline');  // readline 모듈을 불러옴
const rl = readline.createInterface({
  input: process.stdin,  // 표준 입력(사용자 입력)을 받음
  output: process.stdout,  // 표준 출력(콘솔)에 출력
});

rl.on('line', function (line) {  // 사용자가 한 줄을 입력하면 실행
  console.log(line);  // 입력 받은 내용을 출력
  rl.close();  // 입력 스트림을 닫음
}).on('close', function () {  // 입력 스트림이 닫히면 실행
  process.exit();  // 프로그램을 종료
});

```
### case 2
```js
// case 2
const readline = require('readline');  // readline 모듈을 불러옴

(async () => {  // 비동기 IIFE (즉시 실행 함수)
  let rl = readline.createInterface({ input: process.stdin });  // readline 인터페이스 생성 (사용자 입력 받기)
  
  for await (const line of rl) {  // 비동기 반복문: 사용자로부터 한 줄씩 입력 받기
    console.log('Hello Goorm! Your input is', line);  // 입력 받은 내용을 출력
    rl.close();  // 입력을 받은 후 입력 스트림을 닫음
  }

  process.exit();  // 프로그램 종료
})();
```


---

참고: https://velog.io/@grap3fruit/%EA%B5%AC%EB%A6%84goorm-%EC%BD%94%ED%85%8C-javascript-%EB%A1%9C-%EC%9E%85%EB%A0%A5%EA%B0%92-%EB%B0%9B%EB%8A%94-%EB%B0%A9%EB%B2%95