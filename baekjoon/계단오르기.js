/**
 * 문제 설명
 * 당신 앞에 계단이 있습니다. 
 * n개의 계단을 올라야 꼭대기에 도착할 수 있고 한 번에 1 또는 2 계단씩 올라갈 수 있다고 할 때, 
 * 꼭대기에 도달할 수 있는 경우의 수가 몇가지 일까요?
 */

/**
 * 접근방법
 * 1. recursive approach(재귀) -> 중복 계산이 있기 때문에 시간복잡도가 비효율적
 * 2. dynamic programming approach(DP) 활용
 * - 연산된 결과를 배열에 저장하고 필요할 때마다 꺼내서 사용
 *    dp = new Array(n+1)
 *    우선 결과 값이 명확한 dp[1] = 1, dp[2] = 2를 넣어주고 시작하면 효율적 연산 가능
 *    선형 시간으로 해결 가능 
 */

// DP
// 1. DP 배열 만들기
// 2. 1계단과 2계단은 미리 저장
// 3. 반복문 -> dp 테이블 채워주기
// 4. formula 적용시키기
// 5. 최족 결과값 return

function climbingStairs(n) {
  if(n===0) return 0;
  let dp = new Array(n+1);

  dp[1] = 1;
  dp[2] = 2;

  for(let i=3;i<=n;i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }

  return dp[n];
}

console.log(climbingStairs(4), climbingStairs(5), climbingStairs(6))