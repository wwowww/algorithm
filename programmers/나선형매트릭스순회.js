// Spiral matrix
// - 2D Array / 2차열 배열 순회 문제
// - m x n 사이즈의 (m: rows, n: columns) 매트릭스의 엘리먼트를 나선형 모양으로 순회

// - 예제 
// - input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// - output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
//  1 -> 2 -> 3
//            ⬇️
//  4 -> 5    6
//  ⬆️         ⬆️
//  7 <- 8 <- 9

// 변수 초기화
// left = 0
// right = m[0].length - 1
// top = 0
// bottom = m.length - 1

/**
 * 1. 4개의 포인터를 각각 변수에 저장 및 초기화 (left, right, top, bottom)
 * 2. Top Left 코너에서 시작, 첫번째 row 왼쪽 -> 오른쪽으로 순회. 순회가 끝나면 Top 포인터 + 1 증가
 * 3. Right Top 코너에서 시작
 * 4. Right Bottom 코너에서 시작 맨 우측 오른쪽 -> 왼쪽으로 순회
 *    순회 후 Bottom 포인터 -1 감소
 * 5. Left 포인터에서 시작, 왼쪽 -> 오른쪽으로 순회 Left 포인터 +1
 */

const test1 = [[1,2,3], [4,5,6], [7,8,9]];
const test2 = [[1,2,3,4], [5,6,7,8], [9,10,11,12]];

function spiralMatrix(matrix) {
  let result = [];
  
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;

  while (left <= right && top <= bottom) {
    for(let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for(let i=top; i<=bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      for(let i=right; i>=left; i--) {
        result.push(matrix[bottom][i]);
      }
  
      bottom--;
    }
  
    if(left <= right) {
      for(let i=bottom; i>=top; i--) {
        result.push(matrix[i][left]);
      }
  
      left++;
    }
  }

  return result;
}

console.log(spiralMatrix(test1));
console.log(spiralMatrix(test2));