//  문제 설명

// n 기간 동안의 주식 가격 변화를 기준으로 낼 수 있는 가장 큰 수익 계산하기
// 언제 사서 언제 팔아야 가장 큰 수익을 낼 수 있을까?

function solution(prices) {
  let maxProfit = 0;
  let minBuyPrice = prices[0];

  for (let price of prices) {
    if (minBuyPrice < price) {
      maxProfit = Math.max(maxProfit, price - minBuyPrice)
    } else {
      minBuyPrice = price;
    }
  }

  return maxProfit;
}

const test1 = [10, 20, 50, 80, 250];
const test2 = [100, 80, 70, 60, 20];

console.log(solution(test1))
console.log(solution(test2))