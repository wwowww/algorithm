// 문제 설명

// - 정렬된 리스트에서 사용되는 탐색 알고리즘
// - 리스트에서 탐색 범위를 절반씩 좁혀가며 특정한 값을 찾을 때 사용
// - 속도가 빠르고 효율적 `O(log n)`

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (target < arr[middle]) {
      high = middle - 1;
    } else if (target > arr[middle]) {
      low = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7));
console.log(binarySearch([10, 20, 30, 70, 100, 120, 770, 800, 1000, 2000, 2300], 1000));